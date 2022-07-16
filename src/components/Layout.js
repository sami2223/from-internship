import React from 'react'
// import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div id="right-section" className="height-100 ">
                {children}
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Layout