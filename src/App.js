
import './App.css';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Catrgory from './components/category/Category';
import Product from './components/product/Product';
import {Birthday} from './components/birthday/Birthday'
import { Footer } from './components/footer/Footer';
function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Catrgory/>
      <Product/>
      <Birthday/>
      <Footer/>
    </div>
  );
}

export default App;
