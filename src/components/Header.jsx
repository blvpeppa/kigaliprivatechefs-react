import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../config/site'

const links = [
  ['Home','/'], ['About','/about'], ['Services','/services'], ['Our Menu','/menu'], ['Professionals','/team'], ['Contact','/contact']
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return <header>
    <nav className="fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 border-b border-black/5 bg-white/[.99] px-[30px] py-5 shadow-soft md:py-[35px]">
      <div className="mx-auto flex max-w-[1150px] items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={site.logo} alt={`${site.displayName} logo`} width="130" className="max-h-14 w-auto object-contain" />
        </Link>
        <ul className={`${open ? 'visible translate-y-0 opacity-100 pointer-events-auto' : 'invisible translate-y-[50px] opacity-0 pointer-events-none'} absolute left-0 top-[91px] flex h-[calc(100vh-91px)] w-full flex-col items-center gap-[30px] bg-white/95 p-[35px] backdrop-blur-[10px] transition duration-300 ease-in-out md:visible md:static md:h-auto md:w-auto md:translate-y-0 md:flex-row md:gap-[38px] md:bg-transparent md:p-0 md:opacity-100 md:pointer-events-auto`}>
          {links.map(([label,path]) => <li key={path}><NavLink to={path} onClick={() => setOpen(false)} className={({isActive}) => `text-base transition-colors duration-200 ${isActive ? 'text-saffron' : 'text-cadet hover:text-saffron'}`}>{label}</NavLink></li>)}
        </ul>
        <div className="flex items-center gap-4">
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="hidden rounded-full bg-saffron px-5 py-3 text-sm font-medium text-cadet sm:inline-flex">WhatsApp CEO</a>
          <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="flex w-5 flex-col gap-[5px] md:hidden">
            <span className={`h-0.5 w-5 rounded bg-cadet transition ${open ? 'translate-y-[7px] -rotate-45' : ''}`}></span>
            <span className={`h-0.5 w-5 rounded bg-cadet transition ${open ? 'rotate-45' : ''}`}></span>
            <span className={`h-0.5 w-5 rounded bg-cadet transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  </header>
}
