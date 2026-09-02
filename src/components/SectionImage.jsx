export default function SectionImage({src, number, label}) {
  return <div className="relative">
    <div className="aspect-square overflow-hidden md:aspect-[5/3] lg:aspect-auto">
      <img src={src} alt="" className="h-full w-full object-cover animate-lazyScaleUp" />
    </div>
    {number && <div className="absolute -bottom-5 -right-5 bg-white p-[30px] text-center shadow-card"><div className="border-[3px] border-dotted border-cultured p-2.5"><p className="font-monoton text-[46px] text-cadet">{number}</p><p className="text-lg font-semibold text-cadet">{label}</p></div></div>}
    <img src="/assets/images/circle.svg" alt="" className="shape absolute right-[-9px] top-[35%] w-5 animate-scaleUp3" />
    <img src="/assets/images/circle.svg" alt="" className="shape absolute left-[-15px] top-1/2 w-[30px] animate-scaleUp2" />
    <img src="/assets/images/ring.svg" alt="" className="shape absolute left-[15%] top-[-10px] w-[35px] animate-moveUp2" />
    <img src="/assets/images/ring.svg" alt="" className="shape absolute bottom-[-20px] left-[5%] w-20 animate-moveUp2" />
  </div>
}
