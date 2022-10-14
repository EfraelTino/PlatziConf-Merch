import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Chequear from '../containers/Chequear';
import Informacion from '../containers/Informacion';
import Pagos from '../containers/Pagos';
import Exitoso from '../containers/Exitoso';
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout';

const App = () => {
    return (
        <BrowserRouter>
        <Layout >
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/chequear' element={<Chequear/>} />
                <Route exact path='/chequear/info' element={<Informacion/>} />
                <Route exact path='/chequear/payment' element={<Pagos/>} />
                <Route exact path='/chequear/exitoso' element={<Exitoso/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;