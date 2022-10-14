import React from 'react';
import inicialState from '../inicialState';
import Productos from '../components/Productos';
// agregamos nuestro inicialSttae

const Home = () => {
    return (
        <Productos products={inicialState.products} />
    );
}

export default Home;