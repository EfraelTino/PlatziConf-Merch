import React from 'react';
// (HEADER/CHEQUEAR/INFORMACION/PAGAR)
import { Link } from 'react-router-dom';
import '../styles/components/Informacion.css';

const Informacion = () => {
    return (
        <div className='Information'>
            <div className='Information-content'>
                <div className='Information-head'>
                    <h2>Informacion de contacto:</h2>
                </div>
                <div className='Information-form'>
                    <form action=''>
                        <input type='text' placeholder='Nombre completo' name='name'/>
                        <input type='email' placeholder='Correo electronico' name='email'/>
                        <input type='text' placeholder='Direccion' name='address'/>
                        <input type='text' placeholder='Apto' name='apto'/>
                        <input type='text' placeholder='Ciudad' name='city'/>
                        <input type='text' placeholder='Pais' name='country'/>
                        <input type='text' placeholder='Estado' name='state'/>
                        <input type='text' placeholder='Código postal' name='cp'/>
                        <input type='text' placeholder='Teléfono' name='phone'/>
                    </form>
                </div>
                {/* regresar o ir a comprar */}
                <div className='Information-buttons'>
                    <div className='Information-back'>
                        Regresar
                    </div>
                    <Link to='/chequear/payment'><div className='Information-next'>
                        Pagar
                    </div></Link>
                    
                </div>
            </div>
            <div className='Information-sidebar'>
                <h3>Pedido:</h3>
                <div className='Information-item'>
                    <div className='Information-element'>
                        <h4>
                            Nombre del item
                        </h4>
                        <span> $10 </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Informacion;