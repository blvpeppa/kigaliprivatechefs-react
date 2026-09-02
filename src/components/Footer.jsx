import { site } from '../config/site'
export default function Footer() {
  return <footer className="bg-cadet px-[30px] py-[50px]">
    <div className="mx-auto flex max-w-[1150px] flex-col items-center justify-between gap-[30px] md:flex-row">
      <a href="/"><img src={site.logo} alt={`${site.displayName} logo`} className="max-h-16 w-auto" width="150" /></a>
      <div className="flex gap-[15px] text-sm"><a className="text-cultured transition hover:text-saffron" href="https://twitter.com/Annabel07785340">Twitter</a><a className="text-cultured transition hover:text-saffron" href="https://www.instagram.com/whxitte">Instagram</a><a className="text-cultured transition hover:text-saffron" href="https://www.facebook.com/andro.pool.54/">Facebook</a><a className="text-cultured transition hover:text-saffron" href="https://youtu.be/OTQqj3-Zqi8">YouTube</a></div>
      <p className="text-center text-xs tracking-[.5px] text-rhythm">© 2026 {site.name}. All Rights Reserved.</p>
    </div>
  </footer>
}
