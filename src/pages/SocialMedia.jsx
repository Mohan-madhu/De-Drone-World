import { BriefcaseBusiness, Camera, ExternalLink, Play, Radio, Users, Video } from 'lucide-react';

const channels = [
  {
    name: 'LinkedIn',
    description: 'Company milestones, hiring, partnerships, institutional programs, and industry updates.',
    href: 'https://www.linkedin.com/company/de-drone-world-solutions-pvt-ltd/',
    icon: BriefcaseBusiness,
    color: 'bg-[#0A66C2]',
  },
  {
    name: 'YouTube',
    description: 'Drone operations, training demonstrations, technology explainers, and field videos.',
    href: 'https://youtube.com/@dedroneworld',
    icon: Video,
    color: 'bg-[#FF0000]',
  },
  {
    name: 'Instagram',
    description: 'Operations reels, student activity, event coverage, and behind-the-scenes moments.',
    href: 'https://www.instagram.com/dedroneworld.in/',
    icon: Camera,
    color: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]',
  },
];

const media = [
  { title: 'Drone Operations Reel', category: 'Field Operations', src: '/assets/drone_video.mp4' },
  { title: 'Training & Technology', category: 'UAV Training', src: '/assets/drone_logo_video.mp4' },
  { title: 'Campus Infrastructure', category: 'Institutional Programs', src: '/assets/infra.mp4' },
];

export default function SocialMedia() {
  return (
    <div className="min-h-screen bg-[#F5FAFC] pt-[104px] text-navy">
      <section className="relative overflow-hidden bg-navy px-6 py-16 text-white">
        <div className="absolute inset-0 opacity-25">
          <img src="/assets/home_hero.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/60" />
        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-bold text-primary">
            <Radio size={18} /> Social Media Presence
          </span>
          <h1 className="mt-5 max-w-3xl text-white">See De Drone World in Action</h1>
          <p className="mt-5 max-w-2xl text-slate-200">
            Follow our training programs, live drone operations, institutional collaborations, student experiences, and technology updates from the field.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {channels.map(({ name, href, icon: Icon }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur-sm transition hover:border-primary hover:bg-primary">
                <Icon size={19} /> Follow on {name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-16 px-6 py-16">
        <section>
          <div className="mb-8 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.14em] text-primary">Official Channels</p>
            <h2 className="mt-2">Connect With Our Drone Ecosystem</h2>
            <p className="mt-4 text-slate-600">Choose the platform that matches how you want to follow our work.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {channels.map(({ name, description, href, icon: Icon, color }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white ${color}`}><Icon size={25} /></span>
                <h3>{name}</h3>
                <p className="mt-3 text-slate-600">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-bold text-primary">Visit channel <ExternalLink size={17} /></span>
              </a>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="font-bold uppercase tracking-[0.14em] text-primary">Watch Our Work</p>
              <h2 className="mt-2">Drone Operations, Training, and Institutional Activity</h2>
            </div>
            <a href="https://youtube.com/@dedroneworld" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-primary">View YouTube channel <ExternalLink size={18} /></a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {media.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <video controls preload="metadata" playsInline className="h-full w-full object-cover">
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-navy/80 px-3 py-1 text-white backdrop-blur-sm"><Play size={16} /> {item.category}</span>
                </div>
                <div className="p-5"><h3>{item.title}</h3></div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6">
              <p className="font-bold uppercase tracking-[0.14em] text-primary">LinkedIn Updates</p>
              <h2 className="mt-2">Company and Career News</h2>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7460232677300797440"
                title="De Drone World LinkedIn update"
                className="h-[620px] w-full"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
          <aside className="space-y-5">
            <div className="rounded-3xl bg-navy p-7 text-white">
              <Users className="text-primary" size={28} />
              <h2 className="mt-5 text-white">Institutional Events</h2>
              <p className="mt-4 text-slate-300">Workshops, internships, campus programs, UAV clubs, and workforce-development initiatives with educational institutions.</p>
              <a href="https://www.linkedin.com/company/de-drone-world-solutions-pvt-ltd/" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-bold text-white">See institutional updates <ExternalLink size={17} /></a>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <Camera className="text-primary" size={28} />
              <h2 className="mt-5">Operations Reels</h2>
              <p className="mt-4 text-slate-600">Watch quick field clips, student activity, flight demonstrations, and event highlights on Instagram.</p>
              <a href="https://www.instagram.com/dedroneworld.in/" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-primary">Open Instagram <ExternalLink size={17} /></a>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
