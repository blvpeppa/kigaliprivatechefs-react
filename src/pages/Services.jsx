import { Link } from 'react-router-dom'

const departments = [
  ['apartments.jpeg','Apartments for Rent','/team/apartments','Apartment rental information will be added here.'],
  ['private-cars.jpeg','Private Cars for Rent','/team/private-cars','Private car rental information will be added here.'],
  ['buffet.jpeg','Buffet Setup Videos','/team/buffet-setup','Buffet setup videos and service information will be added here.'],
  ['tour-guides.jpeg','Tour Guiders','/team/tour-guiders','Tour guide profiles and availability information will be added here.'],
  ['private-drivers.jpeg','Private Drivers','/team/private-drivers','Private driver profiles and availability information will be added here.'],
  ['service4.png','Private Chefs & Catering','/team/private-chefs','Chef CK and Chef Perry are currently listed. Contact the team for availability.'],
  ['service3.png','DJs','/team/djs','DJ Kim is currently listed. Contact the team for current event availability.'],
  ['service2.png','Service','/team/service','Diane is currently listed. More service details will be added as confirmed.'],
]

export default function Services(){return <main className="px-[30px] pb-[110px] pt-[150px]"><div className="mx-auto max-w-[1150px]"><div className="mb-12 max-w-[760px]"><p className="mb-3 text-xs font-medium uppercase tracking-[.18em] text-rhythm">Departments</p><h1 className="section-title mb-5">Services and professionals.</h1><p className="leading-7 text-rhythm">Browse the departments currently available through Kigali Private Chefs. Where information is not confirmed yet, the page clearly says so instead of displaying placeholder claims.</p></div><div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">{departments.map(([img,title,path,text])=><article key={title} className="overflow-hidden bg-white shadow-soft"><img src={`/assets/images/departments/${img}`} alt="" className="h-[220px] w-full object-cover" onError={(e)=>{e.currentTarget.src=`/assets/images/${img}`}}/><div className="p-6"><p className="mb-3 text-xs uppercase tracking-[.16em] text-rhythm">Department</p><h2 className="mb-4 text-xl font-semibold text-cadet">{title}</h2><p className="mb-6 text-sm leading-7 text-rhythm">{text}</p><Link to={path} className="text-sm font-medium text-cadet hover:text-saffron">View department →</Link></div></article>)}</div></div></main>}
