import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import { TeamDirectory, TeamCategory, PersonProfile } from './pages/Team'

export default function App(){
  return <Layout><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/team" element={<TeamDirectory/>}/>
    <Route path="/team/:categorySlug" element={<TeamCategory/>}/>
    <Route path="/team/member/:memberSlug" element={<PersonProfile/>}/>
    <Route path="*" element={<Home/>}/>
  </Routes></Layout>
}
