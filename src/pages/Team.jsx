import { Link, useParams } from 'react-router-dom'
import { getCategory, getPerson, team, teamCategories } from '../data/team'

function CategoryCard({ category }) {
  const count = team.filter((person) => person.category === category.slug).length
  return <Link to={`/team/${category.slug}`} className="group relative border border-black/5 bg-white p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-card md:p-8">
    <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-saffron transition group-hover:scale-150" />
    <p className="mb-7 text-xs font-medium uppercase tracking-[.18em] text-rhythm">{count ? `${count} confirmed profile${count === 1 ? '' : 's'}` : 'No further information yet'}</p>
    <h2 className="mb-3 text-2xl font-semibold tracking-[-1px] text-cadet md:text-[30px]">{category.label}</h2>
    <p className="mb-8 max-w-[340px] text-sm leading-7 text-rhythm">{category.description}</p>
    <span className="inline-flex items-center gap-2 text-sm font-medium text-cadet transition group-hover:gap-4">{count ? 'View confirmed professionals' : 'View department'} <span aria-hidden>→</span></span>
  </Link>
}

function PersonCard({ person }) {
  return <Link to={`/team/member/${person.slug}`} className="group block bg-white">
    <div className="relative aspect-[4/5] overflow-hidden bg-cultured">
      <img src={person.image} alt={`${person.name} placeholder`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <span className="absolute left-4 top-4 bg-white/90 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[.12em] text-cadet backdrop-blur">{person.role}</span>
    </div>
    <div className="border-x border-b border-black/5 px-5 py-5">
      <h3 className="text-xl font-semibold tracking-[-.5px] text-cadet">{person.name}</h3>
      <p className="mt-1 text-sm text-rhythm">{person.specialty}</p>
    </div>
  </Link>
}

export function TeamDirectory() {
  return <main className="pt-[120px]"><section className="px-[30px] pb-[65px] pt-[45px] md:pb-[90px] md:pt-[70px]"><div className="mx-auto max-w-[1150px]"><p className="mb-5 text-xs font-medium uppercase tracking-[.2em] text-rhythm">Kigali Private Chefs</p><div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><h1 className="max-w-[780px] text-[45px] font-semibold leading-[1.05] tracking-[-2px] text-cadet sm:text-[58px] md:text-[72px]">Professionals and departments.</h1><p className="max-w-[390px] text-[15px] leading-7 text-rhythm lg:justify-self-end">Only confirmed professionals are shown as people. Other departments remain clearly marked as coming soon.</p></div></div></section><section className="bg-cultured px-[30px] py-[70px] md:py-[100px]"><div className="mx-auto max-w-[1150px]"><div className="mb-10"><p className="mb-2 text-xs uppercase tracking-[.18em] text-rhythm">Departments</p><h2 className="section-title">Choose a department.</h2></div><div className="grid gap-5 md:grid-cols-2">{teamCategories.map((category) => <CategoryCard key={category.slug} category={category} />)}</div></div></section><section className="px-[30px] py-[75px] md:py-[110px]"><div className="mx-auto max-w-[1150px]"><div className="mb-10 max-w-[650px]"><p className="mb-2 text-xs uppercase tracking-[.18em] text-rhythm">Confirmed professionals</p><h2 className="section-title mb-4">Current team profiles.</h2></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{team.map((person) => <PersonCard key={person.slug} person={person} />)}</div></div></section></main>
}

export function TeamCategory() {
  const { categorySlug } = useParams()
  const category = getCategory(categorySlug)
  const people = team.filter((person) => person.category === categorySlug)
  if (!category) return <TeamDirectory />
  return <main className="pt-[120px]"><section className="bg-cultured px-[30px] pb-[65px] pt-[60px] md:pb-[85px] md:pt-[80px]"><div className="mx-auto max-w-[1150px]"><Link to="/team" className="mb-8 inline-flex text-sm text-rhythm hover:text-saffron">← Back to departments</Link><p className="mb-4 text-xs uppercase tracking-[.2em] text-rhythm">Department</p><h1 className="mb-5 text-[45px] font-semibold leading-none tracking-[-2px] text-cadet sm:text-[60px]">{category.label}</h1><p className="max-w-[600px] text-[15px] leading-7 text-rhythm">{category.description}</p></div></section><section className="px-[30px] py-[70px] md:py-[100px]"><div className="mx-auto max-w-[1150px]">{people.length ? <><div className="mb-10 flex items-center justify-between"><h2 className="section-title">Confirmed professionals</h2><span className="text-sm text-rhythm">{people.length} profile{people.length===1?'':'s'}</span></div><div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{people.map((person) => <PersonCard key={person.slug} person={person} />)}</div></> : <div className="border border-black/5 bg-cultured p-8 md:p-12"><p className="mb-3 text-xs uppercase tracking-[.18em] text-rhythm">Coming soon</p><h2 className="mb-4 text-2xl font-semibold text-cadet">No further information yet.</h2><p className="max-w-[650px] leading-7 text-rhythm">This department has been added to the website, but professional profiles and detailed service information have not been confirmed yet. Contact the CEO if you need current information.</p></div>}</div></section></main>
}

export function PersonProfile() {
  const { memberSlug } = useParams()
  const person = getPerson(memberSlug)
  if (!person) return <TeamDirectory />
  const category = getCategory(person.category)
  return <main className="pt-[120px]"><section className="px-[30px] pb-[80px] pt-[50px] md:pb-[120px] md:pt-[75px]"><div className="mx-auto max-w-[1050px]"><Link to={`/team/${category.slug}`} className="mb-10 inline-flex text-sm text-rhythm hover:text-saffron">← Back to {category.label}</Link><div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-20"><div className="aspect-[4/5] max-w-[520px] overflow-hidden bg-cultured"><img src={person.image} alt={`${person.name} placeholder`} className="h-full w-full object-cover"/></div><div><p className="mb-4 text-xs font-medium uppercase tracking-[.2em] text-rhythm">{category.label}</p><h1 className="mb-4 text-[44px] font-semibold leading-[1.05] tracking-[-2px] text-cadet sm:text-[60px]">{person.name}</h1><p className="mb-7 text-lg text-rhythm">{person.role}</p><div className="mb-8 h-px w-16 bg-saffron"/><p className="mb-7 text-base leading-8 text-rhythm">{person.bio}</p><div className="bg-cultured p-5 md:p-6"><p className="mb-2 text-xs uppercase tracking-[.16em] text-rhythm">Specialty</p><p className="font-medium text-cadet">{person.specialty}</p></div></div></div></div></section><section className="bg-cadet px-[30px] py-[55px] text-white"><div className="mx-auto flex max-w-[1050px] flex-col justify-between gap-5 md:flex-row md:items-center"><div><p className="mb-2 text-xs uppercase tracking-[.18em] text-white/60">Kigali Private Chefs</p><h2 className="text-2xl font-semibold">Need availability?</h2></div><a href="https://wa.me/250781118679" target="_blank" rel="noreferrer" className="brand-btn brand-btn-primary">WhatsApp the CEO</a></div></section></main>
}
