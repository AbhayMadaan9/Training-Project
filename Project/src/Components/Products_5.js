import React from 'react'
import './products.css'
export default function Products() {
    return (

        <div className="container1">
            <div className="row">

                <div className="col-lg-4">
                    <h2>Body Products</h2>
                    <p>Explore the best-selling, natural,and 100% toxin-free adn beauty produdcts from Kushal Medical's.Get amazing deals and start your toxin.free skin , hair, and baby care journey</p>
                    <button type='button' className='btn1'><a href="/Baby_products" style={{color:'white'}}>VIEW ALL</a></button>

                </div>

                <div className="col-lg-8">
                    <div className="carousel slide" data-ride='carousel' id='mycarousel' />
                    <ol className='carousel-indicators'>
                        <li data-target='mycarousel' data-slide-to='0' className='active'></li>
                        <li data-target='mycarousel' data-slide-to='1' ></li>
                    </ol>
                    <div className="carousel-inner" role='listbox'>
                        <div className="carousel-item active">

                            <div className="card">
                                <img src="https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_2.jpg?auto=compress&fit=scale&w=400&h=400" alt="Product" className='card-img-top' />
                                <div className="card-body">
                                    <div className="card-text">
                                        <p>Ubtan Face Wash with Turmeric  Saffron for Tan Removal – 150 ml</p>
                                        <p>Removes Tan | brightness Skin</p>
                                        <i class="fa-solid fa-star" style={{color:'gold', marginLeft:'40px'}}></i>4.7 | <i class="fa-duotone fa-badge-check">500 reviews</i>
                                        <h3>$15</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <img src="https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_2.jpg?auto=compress&fit=scale&w=400&h=400" alt="Product" className='card-img-top' />
                                <div className="card-body">
                                    <div className="card-text">
                                        <p>Onion Shampoo with Onion and Plant Keratin for Hair Fall Control - 250ml</p>
                                        <p>Reduces Hair Fall | Strengthens Hair |Softens Hair</p>
                                        <i class="fa-solid fa-star" style={{color:'gold', marginLeft:'40px'}}></i>4.3 | <i class="fa-solid fa-badge-check"></i>450 reviews
                                        <h4>$13</h4>
                                    </div>

                                </div>
                            </div>

                            <div className="card">
                                <img src="https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_2.jpg?auto=compress&fit=scale&w=400&h=400" alt="Product" className='card-img-top' />
                                <div className="card-body">
                                    <div className="card-text">
                                        <p>Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml</p>
                                        <p>Boosts Hair Growth | Adds Strength  Shine</p>
                                        <i class="fa-solid fa-star"  style={{color:'gold', marginLeft:'40px'}}></i>4.7 | <i class="fa-duotone fa-badge-check">500 reviews</i>
                                        <h4>$12</h4>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="carousel-item">

                            <div className="card">
                                <img src="https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_2.jpg?auto=compress&fit=scale&w=400&h=400" alt="Product" className='card-img-top' />
                                <div className="card-body">
                                    <div className="card-text">
                                        <p>Ubtan Face Wash with Turmeric  Saffron for Tan Removal  150 ml</p>
                                        <p>Removes Tan | brightness Skin</p>
                                        <i class="fa-solid fa-star"  style={{color:'gold', marginLeft:'40px'}}></i>4.2 | <i class="fa-duotone fa-badge-check">500 reviews</i>
                                        <h3>$15</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <img src="https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_2.jpg?auto=compress&fit=scale&w=400&h=400" alt="Product" className='card-img-top' />
                                <div className="card-body">
                                    <div className="card-text">
                                        <p>Onion Shampoo with Onion and Plant Keratin for Hair Fall Control - 250ml</p>
                                        <p>Reduces Hair Fall | Strengthens Hair |Softens Hair</p>
                                        <i class="fa-solid fa-star"  style={{color:'gold', marginLeft:'40px'}}></i>4.2 | <i class="fa-duotone fa-badge-check">500 reviews</i>
                                        <h4>$13</h4>
                                    </div>

                                </div>
                            </div>

                            <div className="card">
                                <img src="https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_2.jpg?auto=compress&fit=scale&w=400&h=400" alt="Product" className='card-img-top' />
                                <div className="card-body">
                                    <div className="card-text">
                                        <p>Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml</p>
                                        <p>Boosts Hair Growth | Adds Strength  Shine</p>
                                        <i class="fa-solid fa-star"  style={{color:'gold', marginLeft:'40px'}}></i>4.2 | <i class="fa-duotone fa-badge-check">500 reviews</i>
                                        <h4>$12</h4>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
