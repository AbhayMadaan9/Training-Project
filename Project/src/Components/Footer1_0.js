import React from 'react'
import './Footer1_0.css'
export default function Footer1_0() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
        <table>
        
        <tr>
          <th>USEFUL LINKS</th> 
          <th>CATEGORIES</th>
          <th>MY ACCOUNT</th>
        </tr>


        <tr>
          <td><a href='#'>Privacy Policy</a></td>
          <td><a href="#">Baby</a></td>
          <td><a href="#">Account</a></td>
        </tr>

        <tr>
          <td><a href="#">Returns</a></td>
          <td><a href="#">Beauty</a></td>
          <td><a href="#">Orders</a></td>
        </tr>

        <tr>
          <td>Terms & Conditions</td>
          <td>Hair</td>
          <td>Addresses</td>
        </tr>

        <tr>
          <td>Terms& Condiotions-Cashback</td>
          <td>Face</td>
        </tr>

    </table>

        </div>
        <div className="col-lg-4">
        <h3>Have Queries Or Concerns</h3>
           <button className='btn'>Contact Us</button>
        </div>
      </div>
         </div>
         <div className="container">
          <h3>FOLLOW US SOCIAL MEDIA</h3>
          <p><i class="fa-brands fa-facebook fa-xl"></i>
          <i class="fa-brands fa-twitter fa-xl"></i>
          <i class="fa-brands fa-linkedin-in fa-xl"></i>
          <i class="fa-brands fa-instagram fa-xl"></i>
          <i class="fa-brands fa-youtube fa-xl"></i>
          </p>
          <p style={{margin:'20px auto auto auto', textAlign:'center'}}>Copyright 2022 Kushal Medical Hall, All right reserved</p>
         </div>
    </>
  )
}
