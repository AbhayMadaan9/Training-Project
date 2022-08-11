// import logo from './logo.svg';
// import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Products_1 from './Components/Products_1';
import Products_2 from './Components/Products_2';
import Products_3 from './Components/Products_3';
import Products_4 from './Components/Products_4';
import Products_5 from './Components/Products_5';
import Products_6 from './Components/Products_6';
import Reviews from './Components/Reviews';
import Blog from './Components/Blog';
import Footer1_0 from './Components/Footer1_0';
import Baby_products from './Components/Baby_products'
import Beauty_products from './Components/Beauty_products'
import Hair_products from './Components/Hair_products'
import Face_products from './Components/Face_products'
import Body_products from './Components/Body_products'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import React from 'react'

function App() {
  return (

    <>
    <Router>
        <Routes>
          <Route exact path='Baby_products' element={<Baby_products />}></Route>
          <Route exact path='/Beauty_products' element={<Beauty_products />}></Route>
          <Route exact path='/Hair_products' element={<Hair_products />}></Route>
          <Route exact path='/Face_products' element={<Face_products />}></Route>
          <Route exact path='/Body_products' element={<Body_products />}></Route>
          <Route exact path='/Blog' element={<Blog />}></Route>
        </Routes>
      </Router>
      <Navbar />
      <Carousel />
      <Products_1 />
      <Products_2 />
      <Products_3 />
      <Products_4 />
      <Products_5 />
      <Products_6 />
      <Reviews description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate cupiditate nulla consequuntur, nihil accusamus quos quasi necessitatibus ipsa molestias. Asperiores ratione similique sapiente, ipsam recusandae dolorum repellat eos fugiat!" name="suresh Rani" stars = "4.8"/> 
      <Footer1_0 />
      <Blog company_name="Kushal Medical's"/>
    </>
  );
}

export default App;
