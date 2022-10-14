import React from 'react';
import '../styles/components/Exitoso.css';

const Exitoso = () => {
    return (
        <div className='Success'>
            <div className='Success-content'>
                <h2>Gracias por tu cumpra</h2>
                <span>Tu pedido llegara en 3 dias a tu direccion: </span>
                <div className='Succes-map'>
                    Google Maps
                </div>
            </div>
        </div>
    );
}

export default Exitoso;