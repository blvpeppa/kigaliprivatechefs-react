import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import {Login,Register,Forgot} from './pages/Auth'
import {TableBooking,VipBooking} from './pages/Bookings'
import {EventBooking,LendHand,Premium,Checkout,Dashboard} from './pages/ExtraPages'

export default function App(){
 return <Layout><Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/forgot" element={<Forgot/>}/>
  <Route path="/table-booking" element={<TableBooking/>}/>
  <Route path="/vip-booking" element={<VipBooking/>}/>
  <Route path="/event-booking" element={<EventBooking/>}/>
  <Route path="/lend-hand" element={<LendHand/>}/>
  <Route path="/premium" element={<Premium/>}/>
  <Route path="/checkout" element={<Checkout/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="*" element={<Home/>}/>
 </Routes></Layout>
}
