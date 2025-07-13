
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login, Signup } from './Pages/Auths'
import VendorDashboard from './Pages/Dashboards/Vendor/dashboard/Index'
import Menu from './Pages/Dashboards/Vendor/menu'
import Order from './Pages/Dashboards/Vendor/order'
import Restaurant from './Pages/Dashboards/Vendor/restaurant'

function App() {
  

  return (
    <>
    
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>


      <Route path='/vendor-dashboard' element={<VendorDashboard />}></Route>
      <Route path='/vendor-menu' element={<Menu />}></Route>
      <Route path='/vendor-order' element={<Order />}></Route>
      <Route path='/vendor-restaurant' element={<Restaurant />}></Route>
    </Routes>
      
    </>
  )
}

export default App
