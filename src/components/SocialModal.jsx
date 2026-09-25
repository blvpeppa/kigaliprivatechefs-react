import { useEffect } from 'react'

export default function SocialModal({ open, onClose, platform }) {
  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-cadet/60 px-5 backdrop-blur-sm" onMouseDown={onClose}>
      <div className="w-full max-w-[460px] rounded-lg bg-white p-7 shadow-card" onMouseDown={(event) => event.stopPropagation()}>
        <div className="mb-5 flex items-start justify-between gap-5">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[.18em] text-rhythm">Social media</p>
            <h2 className="text-2xl font-semibold text-cadet">{platform}</h2>
          </div>
          <button type="button" onClick={onClose} className="text-2xl text-cadet" aria-label="Close">×</button>
        </div>
        <p className="leading-7 text-rhythm">This social media page is currently unavailable. Please contact Kigali Private Chefs directly for the latest information.</p>
        <a href="https://wa.me/250781118679" target="_blank" rel="noreferrer" className="brand-btn brand-btn-primary mt-6">Contact the CEO on WhatsApp</a>
      </div>
    </div>
  )
}
