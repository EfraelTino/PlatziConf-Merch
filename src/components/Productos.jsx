import React from 'react';
import '../styles/components/Productos.css'
import Producto from './Producto';

const Productos = ({products }) => {
    return (
        <div className="Products">
        <div className="Products-items">
          {products.map(product => (
            <Producto key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
}

export default Productos;