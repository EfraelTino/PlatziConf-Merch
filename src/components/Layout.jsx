// vivira toda nuestra estrucutra
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css'

// con childen le decimos que todos nuestro containers viviran entre header y footer
const Layout = ({children}) => {
    return (
        <div className='Main'>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;