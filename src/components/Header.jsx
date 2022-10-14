import React from 'react';
// trabajamos con react-router tambien los devemos de import de a hacia a donde queremos ir (HEADER/CHEQUEAR)
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
const Header = () => {
    return (
        <div className='Header'>
            <Link to='/'><h1 className='Header-title'>PlatziConf Merch</h1></Link>
            <div className='Header-checkout'>
            <Link to='/chequear'>
                <i className='fas fa-shopping-basket'/>
            </Link>
                
            </div>
        </div>
    );
}

export default Header;