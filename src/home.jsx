import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Card from "./Components/Cards/Card";
import White from "./Components/White/White";
import Cards from "./Components/Cards/Cards";
import GridCoffe from './Components/GridCoffe/GridCoffe'
import Coffemolka from './Components/CoffeMolka/Coffemolka'
import Coffe0 from "./Components/Coffe0/Coffe0";
import Nature from "./Components/Nature/Nature";
import Ask from "./Components/Ask/Ask";
import US from "./Components/aboutUs/US";





const Home = () => {
  return (

    <div>
      <Header />
      <Nav />
      <White />
      <Cards />
      {/*  */}

      <Coffemolka />
      {/*  */}
      <GridCoffe />
      <Nature />
      <Ask />
      <US />
      <Footer />
    </div>
  )
}

export default Home;