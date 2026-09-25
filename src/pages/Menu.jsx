import { Link } from 'react-router-dom'

const gallery = [
  ['menu1.jpg','Private dining','A food experience prepared for your occasion.'],
  ['menu2.jpg','Chef service','Ask the team about current chef availability and menu options.'],
  ['menu3.jpg','Event catering','Discuss wedding and event catering requirements directly with the team.'],
  ['menu4.jpg','Celebration dining','Menu details are confirmed with clients according to the event.'],
  ['menu5.jpg','Home dining','Contact the team for current options and availability.'],
  ['menu6.jpg','Special occasions','Ask about available culinary services for your occasion.'],
]

export default function Menu(){return <main className="px-[30px] pb-[110px] pt-[150px]"><div className="mx-auto max-w-[1150px]"><div className="mb-12 max-w-[720px]"><p className="mb-3 text-xs font-medium uppercase tracking-[.18em] text-rhythm">Food & catering</p><h1 className="section-title mb-5">A simple food showcase.</h1><p className="leading-7 text-rhythm">Current menu options, pricing, and availability should be confirmed directly with Kigali Private Chefs. There is no online cart or account required.</p></div><div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">{gallery.map(([img,title,text])=><article key={img} className="overflow-hidden bg-white shadow-soft"><img src={`/assets/images/${img}`} alt="" className="h-[230px] w-full object-cover"/><div className="p-6"><h2 className="mb-3 text-xl font-semibold text-cadet">{title}</h2><p className="mb-6 text-sm leading-7 text-rhythm">{text}</p><Link to="/contact" className="text-sm font-medium text-cadet hover:text-saffron">Contact about this →</Link></div></article>)}</div></div></main>}
