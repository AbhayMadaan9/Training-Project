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
import React from 'react'
function App() {
  return (
<>
    <Navbar/>
    <Carousel/>
    <Products_1/>
    <Products_2/>
    <Products_3/>
    <Products_4/>
    <Products_5/>
    <Products_6/>
    <Reviews/>
    <Blog/>
    </>
  );
}

export default App;
