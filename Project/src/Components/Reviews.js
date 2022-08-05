import React from 'react'
import './reviews.css'
export default function Reviews() {
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit itaque nesciunt, eum commodi eos necessitatibus adipisci, modi sint provident iste accusantium alias quisquam maiores ex perferendis, eius quo optio!</p> 
                      </div>
                      <img src="https://mamaearthp.imgix.net/wysiwyg/Priyanshi_Singh_gHqZqXk.jpg?auto=format" alt="customer img" className='img-circle'/>&nbsp;&nbsp;&nbsp;
                      <strong>Ramesh Rani</strong> <span style={{color:'white', background:'#00ff7f'}}>4.6<i class="fa-solid fa-star" style={{color:'white'}}></i></span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit itaque nesciunt, eum commodi eos necessitatibus adipisci, modi sint provident iste accusantium alias quisquam maiores ex perferendis, eius quo optio!</p> 
                      </div>
                      <img src="https://mamaearthp.imgix.net/wysiwyg/Priyanshi_Singh_gHqZqXk.jpg?auto=format" alt="customer img" className='img-circle'/>&nbsp;&nbsp;&nbsp;
                      <strong>Ramesh Rani</strong> <span style={{color:'white', background:'#00ff7f'}}>4.6<i class="fa-solid fa-star" style={{color:'white'}}></i></span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit itaque nesciunt, eum commodi eos necessitatibus adipisci, modi sint provident iste accusantium alias quisquam maiores ex perferendis, eius quo optio!</p> 
                      </div>
                      <img src="https://mamaearthp.imgix.net/wysiwyg/Priyanshi_Singh_gHqZqXk.jpg?auto=format" alt="customer img" className='img-circle'/>&nbsp;&nbsp;&nbsp;
                      <strong>Ramesh Rani</strong> <span style={{color:'white', background:'#00ff7f'}}>4.6<i class="fa-solid fa-star" style={{color:'white'}}></i></span>
                    </div>
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
