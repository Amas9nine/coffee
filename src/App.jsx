import { Route, Routes } from 'react-router-dom'
import './App.css'
import US from './Components/aboutUs/US'
import Ask from './Components/Ask/Ask'
import Bunner from './Components/Bunner/Bunner'
import Cards from './Components/Cards/Cards'
// import Cofeologia from './Components/Cofeologia/Cofeologia'
// import Cofeologia2 from './Components/Cofeologia2/Cofeologia2'
// import CoffeForCoffe from './Components/CoffeForCoffe/CoffeForCoffe'
import Coffemolka from './Components/CoffeMolka/Coffemolka'
import Footer from './Components/Footer/Footer'
import GridCoffe from './Components/GridCoffe/GridCoffe'
// import Header from './Components/Header/Header'
// import Nature from './Components/Nature/Nature'
// import Orange from './Components/Orange/Orange'
import FormBanner from './Components/formBanner/formBanner'
import Servic from './Components/Servic/Servic'
import Serv from './Components/Service/serv'
import Home from './home'
import Coffe0 from './Components/Coffe0/Coffe0'
import HeaderUsFooter from './Components/pages/HeaderUsFooter'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<HeaderUsFooter />} />
        <Route path='/coffe0' element={<Coffe0 />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/service' element={<Servic />} />
      </Routes>
    </div >

  )
}

export default App
