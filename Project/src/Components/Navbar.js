import React from 'react'
// import { Link } from 'react-router-dom'
import './Navstyle.css'
// import './navibar.js'
 

export default function (props) {
  return (
    <>

    <div className="navcontainer1">
        <ul>
          <li><a href='/'><h2>Kushal Medical's</h2></a></li>
          <li><a href='/'><input type='text' placeholder='Search for products...'/><button><i class="fa-solid fa-magnifying-glass"></i>Search</button></a></li>
          <li><a href='/'><i class="fa-solid fa-cart-shopping fa-lg" style={{color:'black'}}></i>Cart</a></li>
          <li><a href='/'><i class="fa-solid fa-user-plus fa-lg" style={{color:'black'}}></i>Login</a></li>
        </ul>

    </div>
    {/* <hr/> */}
    <div className='container2'>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/Baby_products'>BABY</a></li>
        <li><a href='/Beauty_products'>BEAUTY</a></li>
        <li><a href='/Hair_products'>HAIR</a></li>
        <li><a href='/Face_products'>FACE</a></li>
        <li><a href='/Body_products'>BODY</a></li>
        <li><a href='/'>GIFT PACKS</a></li>
        <li><a href='/'>ALL PRODUCTS</a></li>
        <li><a href='/Blog'>BLOG</a></li>
      </ul>
    </div>
    {/* <hr/> */}
    </>
  )
}
