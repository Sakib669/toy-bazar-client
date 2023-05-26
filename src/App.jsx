import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/pages/shared/navbar/Navbar'
import Footer from './components/pages/shared/footer/Footer'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
