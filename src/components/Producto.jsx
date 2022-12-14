import React from 'react';

const Producto = ({ product  }) => {
    return (
        <div className="Products-item">
            <img src={product.image} alt={product.title} />
            <div className="Product-item-info">
                <h2>
                    {product.title}
                    <span>
                        $
                        {' '}
                        {product.price}
                    </span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button type="button">Comprar</button>
        </div>
    );
}

export default Producto;