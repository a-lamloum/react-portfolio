// eslint-disable-next-line
import Footer from './components/footer/footer.jsx'
import Header from './components/header/header.jsx'
// import Services from './components/services/services'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contacts from './components/contact/contact'
import './App.css'
import React from 'react'


function App() {
  return (
    <div>
      <Header />
      <Nav/>
      <About/> 
      <Experience/> 
      {/* <Services/> */}
      <Portfolio/>
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
