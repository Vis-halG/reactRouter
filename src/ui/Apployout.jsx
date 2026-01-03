import Header from './Header'
import Footer  from './Footer'
import { Outlet } from 'react-router-dom'       

const Apployout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Apployout