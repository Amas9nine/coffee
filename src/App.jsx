import './App.css'
import Cards from './Components/Cards/Cards'
import CoffeForCoffe from './Components/CoffeForCoffe/CoffeForCoffe'
import Coffemolka from './Components/CoffeMolka/Coffemolka'
import Grid2 from './Components/GridCoffe/GridCoffe'
import GridCoffe from './Components/GridCoffe/GridCoffe'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Orange from './Components/Orange/Orange'
import White from './Components/White/White'

function App() {

  return (
    <div className="App">
      <Header />
      <Nav />
      <White />
      <Cards />
      <Coffemolka />
      <CoffeForCoffe />
      <GridCoffe />
      <Grid2 />
      <Orange />
    </div>
  )
}

export default App