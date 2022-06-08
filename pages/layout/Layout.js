import React from 'react'
import Nav from './nav/Nav';
import Footer from './footer/Footer';

const Layout = ({children}) => {
  return (
    <div className="scroll-smooth">
        <Nav />
        {children}
        <Footer />
    </div>
  )
}

export default Layout