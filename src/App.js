// eslint-disable-next-line
import Footer from './components/footer/footer.jsx'
import Header from './components/header/header.jsx'
import Services from './components/services/services'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
// import Testimonials from './components/testimonials/testimonials'
import Contacts from './components/contact/contact'
import './App.css'
import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import LanguageToggle from './components/LanguageToggle/LanguageToggle'
import { LanguageProvider } from './context/LanguageContext'


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <Nav />
          <ThemeToggle />
          <Header />
          <About/> 
          <Experience/> 
          <Services/>
          <Portfolio/>
          {/* <Testimonials /> */}
          <Contacts />
          <Footer />
          <LanguageToggle />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
