import React from 'react'
import US from '../Components/aboutUs/US'
import Cofeologia from '../Components/Cofeologia/Cofeologia'
import Cofeologia2 from '../Components/Cofeologia2/Cofeologia2'
import Footer from '../Components/Footer/Footer'
import FormBanner from '../Components/formBanner/FormBanner'
import Header from '../Components/Header/Header'

const HeaderUsFooter = () => {
  return (
    <div>
      <Header />
      <US />
      <Cofeologia />
      <Cofeologia2 />
      <FormBanner />
      <Footer />
    </div>
  )
}

export default HeaderUsFooter;