
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login, Signup } from './Pages/Auths'
import VendorDashboard from './Pages/Dashboards/Vendor/dashboard/Index'
import Menu from './Pages/Dashboards/Vendor/menu'
import Order from './Pages/Dashboards/Vendor/order'
import Restaurant from './Pages/Dashboards/Vendor/restaurant'
import Admindashboard from './Pages/Dashboards/Admin/Dashboard'
import AdminDashboard from './Pages/Dashboards/Admin/Dashboard'
import AllRestaurants from './Pages/Dashboards/Admin/All-Restaurants'
import Orders from './Pages/Dashboards/Admin/Orders'
import AllMenu from './Pages/Dashboards/Admin/AllMenu'

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


      //AdminRoutes
       {/* //<Route path='/admin-dashboard' element={<Adm />}></Route> */}
       <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
       <Route path="/all-restaurant" element={<AllRestaurants/>}></Route> 
       <Route path="/admin-order"  element={<Orders />}></Route>
       <Route path="/admin-menu"  element={<AllMenu />}></Route>
       
        </Routes>
      
    </>
  )
}

export default App
