import { Link } from 'react-router-dom'
import { site } from '../config/site'

const departments = [
  ['01','Private Chefs','Chef CK and Chef Perry are currently listed. More professional information will be added as it is confirmed.'],
  ['02','DJs','DJ Kim is currently listed for DJ services.'],
  ['03','Service','Diane is currently listed for service support.'],
  ['04','Apartments for Rent','Department available. Details coming soon.'],
  ['05','Private Cars for Rent','Department available. Details coming soon.'],
  ['06','Buffet Setup','Department available. Videos and details coming soon.'],
  ['07','Tour Guiders','Department available. Details coming soon.'],
  ['08','Private Drivers','Department available. Details coming soon.'],
]

const testimonials = [
  { name: 'Aline Mukamana', location: 'Kigali', title: 'Wedding celebration', text: 'A private wedding celebration can bring chefs, service, buffet setup, and entertainment together in one coordinated experience.' },
  { name: 'Eric Niyonsenga', location: 'Kigali', title: 'Private event', text: 'For a private event, guests can contact the team directly to discuss the professionals and services available for the occasion.' },
]

export default function Home(){return <main>
<section className="grid grid-cols-1 items-center gap-[50px] px-[30px] pb-[70px] pt-[150px] lg:grid-cols-2 lg:py-[110px] lg:pt-[170px]">
 <div className="text-center lg:text-left"><p className="mb-[25px] inline-block bg-cultured p-1 text-[13px]">Private experiences in Rwanda</p><h1 className="mb-[30px] text-[46px] font-semibold leading-[1.08] tracking-[-2px] text-cadet sm:text-[54px] md:text-[72px]">Private chefs, events, hospitality and more.</h1><p className="mx-auto mb-[30px] max-w-[520px] leading-[1.7] text-rhythm lg:mx-0">Kigali Private Chefs connects clients with culinary professionals and selected private services for celebrations, gatherings, travel, and everyday needs.</p><div className="flex flex-col items-center gap-[15px] sm:flex-row sm:justify-center lg:justify-start"><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="brand-btn brand-btn-primary">WhatsApp the CEO</a><Link to="/services" className="brand-btn brand-btn-secondary">Explore departments</Link></div></div>
 <div className="overflow-hidden"><img src="/assets/images/about-image.jpg" alt="Kigali Private Chefs service" className="h-full min-h-[380px] w-full object-cover"/></div>
</section>

<section className="px-[30px] py-[70px]"><div className="mx-auto max-w-[1150px]"><div className="mb-12 max-w-[720px]"><p className="mb-3 text-xs font-medium uppercase tracking-[.18em] text-rhythm">What we offer</p><h2 className="section-title mb-5">One place for the services you need.</h2><p className="section-text max-w-none">Some departments already have confirmed professionals. Other departments are live as categories while their details are being prepared.</p></div><div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">{departments.map(([n,t,d])=><div key={n} className="border border-black/5 bg-white p-6 shadow-soft"><p className="mb-8 font-monoton text-3xl text-saffron">{n}</p><h3 className="mb-4 text-lg font-semibold text-cadet">{t}</h3><p className="text-sm leading-7 text-rhythm">{d}</p></div>)}</div></div></section>

<section className="bg-cultured px-[30px] py-[75px]"><div className="mx-auto max-w-[1150px] grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><p className="mb-3 text-xs font-medium uppercase tracking-[.18em] text-rhythm">About the company</p><h2 className="section-title mb-5">Built around private experiences.</h2><p className="leading-7 text-rhythm">Kigali Private Chefs brings together culinary talent and related private services so clients can discuss their needs directly with the team.</p><Link to="/about" className="brand-btn brand-btn-primary mt-7">Learn more</Link></div><img src="/assets/images/about2.png" alt="Private service experience" className="h-[360px] w-full object-cover"/></div></section>

<section className="px-[30px] pb-[120px] pt-[80px]"><div className="mx-auto max-w-[1150px]"><p className="mb-3 text-xs font-medium uppercase tracking-[.18em] text-rhythm">Client stories</p><h2 className="section-title mb-4">Experiences built around real occasions.</h2><p className="mb-12 max-w-[700px] text-sm leading-7 text-rhythm">These are illustrative release-ready stories based on the services offered. Replace them with verified client quotes when approved by the clients.</p><div className="grid grid-cols-1 gap-10 md:grid-cols-2">{testimonials.map((item)=><article key={item.name} className="border-t-2 border-saffron pt-6"><h3 className="mb-3 text-xl font-semibold text-cadet">{item.title}</h3><p className="mb-5 leading-7 text-rhythm">“{item.text}”</p><p className="text-sm font-semibold text-cadet">{item.name}</p><p className="text-xs uppercase tracking-[.15em] text-rhythm">{item.location}</p></article>)}</div></div></section>
</main>}
