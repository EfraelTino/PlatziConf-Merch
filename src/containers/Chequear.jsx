import React from 'react';
// usamos link para las aprtes que queremos linequear o hacia que container o vista queremos ir (HEADER/CHEQUEAR/INFORMACION)
import { Link } from 'react-router-dom';
import '../styles/components/Chequear.css';

const Chequear = () => {
    return (
        <div className='Checkout'>
            <div className='Checkout-content'>
                <h3>Lista de pedidos:</h3>
                <div className='Checkout-item'>
                    <div className='Checkout-element'>
                        <h4>Nombre del producto</h4>
                        <span>$50</span>
                    </div>
                    <button type='button'><i className='fas fa-trash-alt' /></button>
                </div>
            </div>
            <div className='Checkout-sidebar'>
                <h3>Precio total: $10</h3>
                <Link to='/chequear/info'>
                <button type='button'>Continuar pedido</button>
                </Link>
                
            </div>
        </div>
    );
}

export default Chequear;