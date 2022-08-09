import React from 'react'
export default function () {
  return (
    <>
    <div className="container-fluid" style={{margin:'auto', padding:'0'}}>  
  <div id="caro" className="carousel slide" data-ride="carousel">
    
    <ol className="carousel-indicators">
      <li data-target="#caro" data-slide-to="0" className="active"></li>
      <li data-target="#caro" data-slide-to="1"></li>
      <li data-target="#caro" data-slide-to="2"></li>
    </ol>

    
    <div className="carousel-inner" >
      <div className="item active">
        <img src="https://images.ctfassets.net/66mrrren2unf/6UZV0N8NslRSRtJkvDmLn2/df86c3e9c5833319211fc7c411e8d645/Onion-OilDesktop.gif?q=40" alt="Promo" style= {{width:'100%'}} />
      </div>

      <div className="item">
        <img src="https://images.ctfassets.net/66mrrren2unf/6UZV0N8NslRSRtJkvDmLn2/df86c3e9c5833319211fc7c411e8d645/Onion-OilDesktop.gif?q=40" alt="promo" style= {{width:'100%'}} />
      </div>
    
      <div className="item">
        <img src="https://images.ctfassets.net/66mrrren2unf/6UZV0N8NslRSRtJkvDmLn2/df86c3e9c5833319211fc7c411e8d645/Onion-OilDesktop.gif?q=40" alt="Promo"  style={{width:'100%'}} />
      </div>
    </div>

{/*     
    <a className="left carousel-control" for="#caro" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" for="#caro" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a> 
  */}
  </div>
</div>
     </>
  )
}

