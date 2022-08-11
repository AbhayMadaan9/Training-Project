import React from 'react'
import './reviews.css'
import PropTypes from 'prop-types';
export default function Reviews(props) {
  return (
    <>
    <div className="container-fluid" id='container1'>
        <div className="heading">
        <h3>What our Customer Says</h3>
        </div>
        <div className="container-fluid" id='container2'>
          <div className="carousel-slide" data-ride='carousel' id='mycarousel'>
            <ol className='carousel-indicators'>
              <li data-target='mycarousel' data-ride-to='0' className='active'></li>
              <li data-target='mycarousel' data-ride-to='0'></li>
              <li data-target='mycarousel' data-ride-to='0'></li>
            </ol>

            <div className="carousel-inner" role='listbox'>
              <div className="carousel-item active">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-text">
                        <p>{props.description}</p> 
                      </div>
                      <img src="https://mamaearthp.imgix.net/wysiwyg/Priyanshi_Singh_gHqZqXk.jpg?auto=format" alt="customer img" className='img-circle'/>&nbsp;&nbsp;&nbsp;
                      <strong>{props.name}</strong> <span style={{color:'white', background:'#00ff7f'}}>{props.stars}<i class="fa-solid fa-star" style={{color:'white'}}></i></span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-text">
                        <p>{props.description}</p> 
                      </div>
                      <img src="https://mamaearthp.imgix.net/wysiwyg/Priyanshi_Singh_gHqZqXk.jpg?auto=format" alt="customer img" className='img-circle'/>&nbsp;&nbsp;&nbsp;
                      <strong>{props.name}</strong> <span style={{color:'white', background:'#00ff7f'}}>{props.stars}<i class="fa-solid fa-star" style={{color:'white'}}></i></span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-text">
                        <p>{props.description}</p> 
                      </div>
                      <img src="https://mamaearthp.imgix.net/wysiwyg/Priyanshi_Singh_gHqZqXk.jpg?auto=format" alt="customer img" className='img-circle'/>&nbsp;&nbsp;&nbsp;
                      <strong>{props.name}</strong> <span style={{color:'white', background:'#00ff7f'}}>{props.stars}<i class="fa-solid fa-star" style={{color:'white'}}></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-text">
                        <p>{props.description}</p> 
                      </div>
                      <img src="https://mamaearthp.imgix.net/wysiwyg/Priyanshi_Singh_gHqZqXk.jpg?auto=format" alt="customer img" className='img-circle'/>&nbsp;&nbsp;&nbsp;
                      <strong>{props.name}</strong> <span style={{color:'white', background:'#00ff7f'}}>{props.stars}<i class="fa-solid fa-star" style={{color:'white'}}></i></span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-text">
                        <p>{props.description}</p> 
                      </div>
                      <img src="https://mamaearthp.imgix.net/wysiwyg/Priyanshi_Singh_gHqZqXk.jpg?auto=format" alt="customer img" className='img-circle'/>&nbsp;&nbsp;&nbsp;
                      <strong>{props.name}</strong> <span style={{color:'white', background:'#00ff7f'}}>{props.stars}<i class="fa-solid fa-star" style={{color:'white'}}></i></span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-text">
                        <p>{props.description}</p> 
                      </div>
                      <img src="https://mamaearthp.imgix.net/wysiwyg/Priyanshi_Singh_gHqZqXk.jpg?auto=format" alt="customer img" className='img-circle'/>&nbsp;&nbsp;&nbsp;
                      <strong>{props.name}</strong> <span style={{color:'white', background:'#00ff7f'}}>{props.stars}<i class="fa-solid fa-star" style={{color:'white'}}></i></span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
       

    </div>
    </>
  )
}

Reviews.PropTypes = {
  description: PropTypes.string.isRequired,
  // isRequired made compulsory to be that type
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired

}
