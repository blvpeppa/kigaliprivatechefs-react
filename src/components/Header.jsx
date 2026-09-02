import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../config/site'

const links = [
  ['Home','/'], ['About','/about'], ['Services','/services'], ['Our Menu','/menu'], ['Contact','/contact'], ['Dashboard','/dashboard']
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cart] = useState([])

  return <header>
    <nav className="fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 border-b border-black/5 bg-white/[.99] px-[30px] py-5 shadow-soft md:py-[35px]">
      <div className="mx-auto flex max-w-[1150px] items-center justify-between">
<Link to="/" onClick={() => setOpen(false)}>
  <img
    src={site.logo}
    alt={`${site.displayName} logo`}
    className="h-20 md:h-24 w-auto object-contain"
  />
</Link>
        <ul className={`${open ? 'visible translate-y-0 opacity-100 pointer-events-auto' : 'invisible translate-y-[50px] opacity-0 pointer-events-none'} absolute left-0 top-[91px] flex h-[calc(100vh-91px)] w-full flex-col items-center gap-[30px] bg-white/90 p-[35px] backdrop-blur-[10px] transition duration-300 ease-in-out md:visible md:static md:h-auto md:w-auto md:translate-y-0 md:flex-row md:gap-[50px] md:bg-transparent md:p-0 md:opacity-100 md:pointer-events-auto`}>
          {links.map(([label,path]) => <li key={path}><NavLink to={path} onClick={() => setOpen(false)} className={({isActive}) => `text-base transition-colors duration-200 ${isActive ? 'text-saffron' : 'text-cadet hover:text-saffron'}`}>{label}</NavLink></li>)}
          <li><NavLink to="/login" onClick={() => setOpen(false)} className="text-base text-cadet transition-colors hover:text-saffron">Register/Login</NavLink></li>
        </ul>
        <div className="flex items-center gap-6">
          <button aria-label="Shopping cart" onClick={() => setCartOpen(true)} className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-white bg-cultured">
            <img src="/assets/images/cart.svg" alt="" width="18" />
            <span className="absolute -right-0.5 -top-0.5 flex min-w-5 items-center justify-center rounded-full bg-saffron px-1.5 text-xs font-medium text-cadet">{cart.length}</span>
          </button>
          <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="flex w-5 flex-col gap-[5px] md:hidden">
            <span className={`h-0.5 w-5 rounded bg-cadet transition ${open ? 'translate-y-[7px] -rotate-45' : ''}`}></span>
            <span className={`h-0.5 w-5 rounded bg-cadet transition ${open ? 'rotate-45' : ''}`}></span>
            <span className={`h-0.5 w-5 rounded bg-cadet transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
    <aside className={`${cartOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'} fixed bottom-0 right-0 z-[60] h-[calc(100vh-91px)] w-full max-w-[450px] bg-white/90 shadow-lg backdrop-blur-[10px] transition duration-500`}>
      <div className="h-full overflow-y-auto p-[30px] pb-[150px] md:p-[60px] md:pb-[150px]">
        <div className="mb-[30px] flex items-center justify-between"><h4 className="font-semibold text-cadet">Your order.</h4><button onClick={() => setCartOpen(false)} className="text-2xl text-cadet">×</button></div>
        <p className="text-sm text-rhythm">Your cart is empty.</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t border-black/10 bg-white p-[30px] md:px-[60px]"><Link to="/checkout" onClick={() => setCartOpen(false)} className="brand-btn brand-btn-primary w-full justify-center">Checkout</Link></div>
    </aside>
  </header>
}
