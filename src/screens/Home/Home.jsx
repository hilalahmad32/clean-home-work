import React from 'react'
import DownloadApp from '../../Compnents/DownloadApp/DownloadApp'
import EveryDay from '../../Compnents/EveryDay/EveryDay'
import FixYourDay from '../../Compnents/FixYourDay/FixYourDay'
import Footer from '../../Compnents/Footer/Footer'
import HappyCoustumer from '../../Compnents/HappyCoustumer/HappyCoustumer'
import Header from '../../Compnents/Header/Header'
import OfferBanner from '../../Compnents/OfferBanner/OfferBanner'
import Ourservices from '../../Compnents/Ourservices/Ourservices'

const Home = () => {
  return (
    <>
    <Header/>
    <FixYourDay/>

    <Ourservices/>
    <OfferBanner/>
    <EveryDay/>
    <HappyCoustumer/>
    <DownloadApp/>
    <Footer/>
    </>
  )
}

export default Home