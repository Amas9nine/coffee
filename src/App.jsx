import { Route, Routes } from 'react-router-dom'
import './App.css'
import US from './Components/aboutUs/US'
import Ask from './Components/Ask/Ask'
import Bunner from './Components/Bunner/Bunner'
import Cards from './Components/Cards/Cards'

import Coffemolka from './Components/CoffeMolka/Coffemolka'
import Footer from './Components/Footer/Footer'
import GridCoffe from './Components/GridCoffe/GridCoffe'

import FormBanner from './Components/formBanner/FormBanner'
import Servic from './Components/Servic/Servic'
import Serv from './Components/Service/Serv'
import Home from './home'
import Coffe0 from './Components/Coffe0/Coffe0'
import HeaderUsFooter from './pages/HeaderUsFooter'
import { HeaderMagazinFooter } from './pages/HeaderMagazinFooter'
import { HeaderServiseCC2F } from './pages/HeaderServiseCC2F'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<HeaderUsFooter />} />
        <Route path='/coffe0' element={<Coffe0 />} />
        <Route path='/cards' element={<HeaderMagazinFooter />} />
        <Route path='/service' element={<HeaderServiseCC2F />} />
      </Routes>
    </div >

  )
}

export default App
