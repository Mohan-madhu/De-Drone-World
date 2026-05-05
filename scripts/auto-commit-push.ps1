param(
  [string]$Branch = "",
  [int]$DebounceMs = 3500
)

$ErrorActionPreference = "Stop"

function Invoke-Git {
  param([string]$Args)
  & git $Args
}

Set-Location "$PSScriptRoot\.."

if (-not (Test-Path .git)) {
  Write-Error "This script must run inside a git repository."
  exit 1
}

$resolvedBranch = if ([string]::IsNullOrWhiteSpace($Branch)) {
  (& git branch --show-current).Trim()
} else {
  $Branch.Trim()
}

if ([string]::IsNullOrWhiteSpace($resolvedBranch)) {
  Write-Error "Could not resolve git branch."
  exit 1
}

$watchTargets = @(
  "src",
  "public",
  "index.html",
  "package.json",
  "vite.config.js",
  "eslint.config.js",
  "README.md"
)

$pending = $false
$timer = New-Object System.Timers.Timer
$timer.Interval = $DebounceMs
$timer.AutoReset = $false

$commitAction = {
  try {
    Set-Location "$PSScriptRoot\.."

    $status = (& git status --porcelain)
    if (-not $status) {
      return
    }

    & git add -A | Out-Null

    $files = @(& git diff --cached --name-only)
    if ($files.Count -eq 0) {
      return
    }

    $stamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $headline = if ($files.Count -gt 2) {
      "$($files[0]), $($files[1]) +$($files.Count - 2) more"
    } elseif ($files.Count -eq 2) {
      "$($files[0]), $($files[1])"
    } else {
      "$($files[0])"
    }

    $message = "auto: website update ($headline) @ $stamp"

    & git commit -m $message | Out-Null
    & git push origin $resolvedBranch | Out-Null

    Write-Host "[$stamp] Pushed: $message" -ForegroundColor Green
  }
  catch {
    Write-Host "Auto commit/push failed: $($_.Exception.Message)" -ForegroundColor Red
  }
}

Register-ObjectEvent -InputObject $timer -EventName Elapsed -Action $commitAction | Out-Null

$watchers = @()
foreach ($target in $watchTargets) {
  if (-not (Test-Path $target)) { continue }

  if ((Get-Item $target) -is [System.IO.DirectoryInfo]) {
    $watcher = New-Object System.IO.FileSystemWatcher
    $watcher.Path = (Resolve-Path $target)
    $watcher.IncludeSubdirectories = $true
    $watcher.Filter = "*"
  } else {
    $watcher = New-Object System.IO.FileSystemWatcher
    $watcher.Path = (Resolve-Path (Split-Path $target -Parent))
    $watcher.Filter = (Split-Path $target -Leaf)
    $watcher.IncludeSubdirectories = $false
  }

  $watcher.NotifyFilter = [IO.NotifyFilters]'FileName, LastWrite, CreationTime, Size, DirectoryName'
  $watcher.EnableRaisingEvents = $true

  $eventAction = {
    $script:pending = $true
    $timer.Stop()
    $timer.Start()
  }

  Register-ObjectEvent $watcher Changed -Action $eventAction | Out-Null
  Register-ObjectEvent $watcher Created -Action $eventAction | Out-Null
  Register-ObjectEvent $watcher Deleted -Action $eventAction | Out-Null
  Register-ObjectEvent $watcher Renamed -Action $eventAction | Out-Null

  $watchers += $watcher
}

Write-Host "Auto commit + push watcher started on branch '$resolvedBranch'. Press Ctrl+C to stop." -ForegroundColor Cyan

try {
  while ($true) {
    Wait-Event -Timeout 1 | Out-Null
  }
}
finally {
  foreach ($w in $watchers) {
    $w.EnableRaisingEvents = $false
    $w.Dispose()
  }
  $timer.Stop()
  $timer.Dispose()
  Get-EventSubscriber | Unregister-Event
}
