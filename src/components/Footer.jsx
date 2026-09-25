import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/site'
import SocialModal from './SocialModal'

export default function Footer() {
  const [social, setSocial] = useState(null)
  return <>
    <footer className="bg-cadet px-[30px] py-[50px]">
      <div className="mx-auto flex max-w-[1150px] flex-col items-center justify-between gap-[30px] md:flex-row">
        <Link to="/"><img src={site.logo} alt={`${site.displayName} logo`} className="max-h-16 w-auto" width="150" /></Link>
        <div className="flex flex-wrap justify-center gap-5 text-sm">
          <button onClick={() => setSocial('Facebook')} className="text-cultured transition hover:text-saffron">Facebook</button>
          <button onClick={() => setSocial('Twitter')} className="text-cultured transition hover:text-saffron">Twitter</button>
          <button onClick={() => setSocial('YouTube')} className="text-cultured transition hover:text-saffron">YouTube</button>
          <a className="text-cultured transition hover:text-saffron" href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <p className="text-center text-xs tracking-[.5px] text-white/60">© 2026 {site.name}. All Rights Reserved.</p>
      </div>
    </footer>
    <SocialModal open={Boolean(social)} platform={social} onClose={() => setSocial(null)} />
  </>
}
