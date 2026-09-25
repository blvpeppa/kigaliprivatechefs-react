import { useState } from 'react'

export default function TeamImage({ src, name, className = '', priority = false }) {
  const [failed, setFailed] = useState(false)
  const initials = name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase()

  if (failed) {
    return (
      <div className={`flex h-full w-full items-center justify-center bg-cultured ${className}`} aria-label={`${name} image placeholder`}>
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-semibold text-cadet shadow-soft">{initials}</div>
          <span className="text-xs font-medium uppercase tracking-[.16em] text-rhythm">Employee photo</span>
        </div>
      </div>
    )
  }

  return <img src={src} alt={`${name} portrait`} loading={priority ? 'eager' : 'lazy'} onError={() => setFailed(true)} className={`h-full w-full object-cover ${className}`} />
}
