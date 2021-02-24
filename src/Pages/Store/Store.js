import React from 'react'
import { productData, productDataThree, productDataTwo } from './components/Products/data'
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Feature from './components/Feature';
import Products from './components/Products';

function Store() {
    return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Cattle Products & Organic Seeds' data={productData} />
      <Feature/>
      <Products heading='Farming Equipments & Machinery' data={productDataTwo} />
      <Products heading='Fertilizers & Pesticides' data={productDataThree} />
      <Footer/>
    </Router>
    )
}

export default Store
