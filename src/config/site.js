export const site = {
  name: 'kigaliprivatechefs',
  displayName: 'Kigali Private Chefs',
  ceo: 'Mugisha Cedric',
  ceoTitle: 'Chef Cedric',
  email: 'kigaliprivatechefs@gmail.com',
  phone: '0781118679',
  phoneDisplay: '0781 118 679',
  whatsapp: '250781118679',
  logo: '/assets/images/logo.png',
  ceoImage: '/assets/images/ceo.jpg',
  instagram: 'https://www.instagram.com/chef_.cedrick/',
}

export const teamCategories = [
  { slug: 'private-chefs', label: 'Private Chefs', shortLabel: 'Chefs', description: 'Private chefs available for home dining, celebrations, weddings, and other occasions.' },
  { slug: 'djs', label: 'DJs', shortLabel: 'DJs', description: 'Music and entertainment professionals for celebrations and private events.' },
  { slug: 'service', label: 'Service', shortLabel: 'Service', description: 'Service professionals supporting events, hospitality, and guest experience.' },
  { slug: 'apartments', label: 'Apartments for Rent', shortLabel: 'Apartments', description: 'Apartment rental information will be added here.' },
  { slug: 'private-cars', label: 'Private Cars for Rent', shortLabel: 'Private Cars', description: 'Private car rental information will be added here.' },
  { slug: 'buffet-setup', label: 'Buffet Setup', shortLabel: 'Buffet Setup', description: 'Buffet setup videos and service information will be added here.' },
  { slug: 'tour-guiders', label: 'Tour Guiders', shortLabel: 'Tour Guiders', description: 'Tour guide profiles and availability information will be added here.' },
  { slug: 'private-drivers', label: 'Private Drivers', shortLabel: 'Private Drivers', description: 'Private driver profiles and availability information will be added here.' },
  { slug: 'house-keeping', label: 'House Keeping', shortLabel: 'House Keeping', description: 'House keeping information will be added here.' },
]

export const team = [
  { slug: 'chef-ck', name: 'Chef CK', role: 'Private Chef', category: 'private-chefs', specialty: 'Private chef services', bio: 'Professional information coming soon. Contact Kigali Private Chefs for current availability and service details.', image: '/assets/images/team/chef-ck.jpeg' },
  { slug: 'chef-perry', name: 'Chef Perry', role: 'Private Chef', category: 'private-chefs', specialty: 'Private chef services', bio: 'Professional information coming soon. Contact Kigali Private Chefs for current availability and service details.', image: '/assets/images/team/chef-perry.jpeg' },
  { slug: 'dj-kim', name: 'DJ Kim', role: 'DJ', category: 'djs', specialty: 'DJ services', bio: 'Professional information coming soon. Contact Kigali Private Chefs for current availability and event details.', image: '/assets/images/team/dj-kim.jpeg' },
  { slug: 'diane', name: 'Diane', role: 'Service', category: 'service', specialty: 'Service support', bio: 'Professional information coming soon. Contact Kigali Private Chefs for current availability and service details.', image: '/assets/images/team/diane.jpeg' },
]

export function getCategory(slug) {
  return teamCategories.find((category) => category.slug === slug)
}

export function getPerson(slug) {
  return team.find((person) => person.slug === slug)
}
