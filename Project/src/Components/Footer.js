import React from 'react'
import './footer.css'
export default function Footer() {
    return (
        <>
            <div className="container">
                <div className="table1">

                    <div className="row">

                        <div className="col-lg-4">
                            <i class="fa-solid fa-truck-fast fa-2xl" style={{margin: '50px auto auto 70px'}}></i>
                            <p>Free Shipping</p>
                            <p style={{margin:'5px auto auto 25px', fontWeight:'lighter', fontSize:'small'}}>On Orders Above Rs399</p>
                        </div>
                        <div className="col-lg-4">
                            <i class="fa-solid fa-indian-rupee-sign fa-2xl"style={{margin: '50px auto auto 70px'}}></i>
                            <p>COD Available</p>
                            <p style={{margin:'5px auto auto 25px', fontWeight:'lighter', fontSize:'small'}}>@ Rs. 40 Per Order</p>
                        </div>
                        <div className="col-lg-4">
                            
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <p>PAYMENT</p>
                            <p><i class="fa-solid fa-shield-check"></i> 1000% Payment Protection, Wasy Return Policy</p>
                            <p><i class="fa-brands fa-cc-visa"></i><i class="fa-brands fa-cc-mastercard"></i><i class="fa-brands fa-cc-paypal"></i>
                                <i class="fa-brands fa-paypal"></i></p>

                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><img src="https://static.vecteezy.com/system/resources/previews/000/502/791/original/dermatologically-tested-icon-vector.jpg" alt="Dermatologically Tested" /></li>
                                <li><img src="https://media.istockphoto.com/vectors/fda-approved-red-grunge-round-vintage-rubber-stamp-vector-id649009046" alt="FDA approved" /></li>
                                <li><img src="https://thumbs.dreamstime.com/z/made-india-round-india-flag-vector-icon-made-india-round-india-flag-vector-icon-made-india-round-india-flag-vector-icon-185123405.jpg" alt="made in india" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <table>
                            <tr>
                                <th>USEFUL LINKS</th>
                                <th>CATEGORY</th>
                                <th>MY ACCOUNT</th>
                            </tr>
                            <tr>
                                <td>Privacy Policy</td>
                                <td>Baby</td>
                                <td>Account</td>
                            </tr>
                            <tr>
                                <td>Returns</td>
                                <td>Beauty</td>
                                <td>Orders</td>
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

                </div>
            </div>
        </>
    )
}
