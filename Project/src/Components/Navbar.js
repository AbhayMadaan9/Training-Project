import React from 'react'
import './Navstyle.css'

export default function () {
  return (
    <>
    <div className="container1">
        <ul>
          <li><a for='/'><img src="https://d2sj89osparb2a.cloudfront.net/images/media/mamaearth-logo.png" alt='logo'/></a></li>
          <li><a for='/'><input type='text' placeholder='Search for products...'/><button><i class="fa-solid fa-magnifying-glass"></i>Search</button></a></li>
          <li><a for='/'><i class="fa-solid fa-cart-shopping" style={{color:'blue'}}></i>Cart</a></li>
          <li><a for='/'><i class="fa-solid fa-user-plus" style={{color:'blue'}}></i>Login</a></li>
        </ul>
    </div>
    <hr/>
    <div className='container2'>
      <ul>
        <li><a for='/'>Home</a></li>
        <li><a for='/'>BABY</a></li>
        <li><a for='/'>BEAUTY</a></li>
        <li><a for='/'>HAIR</a></li>
        <li><a for='/'>FACE</a></li>
        <li><a for='/'>BODY</a></li>
        <li><a for='/'>GIFT PACKS</a></li>
        <li><a for='/'>ALL PRODUCTS</a></li>
        <li><a for='/'>BLOG</a></li>
      </ul>
    </div>
    <hr/>
    </>
  )
}
