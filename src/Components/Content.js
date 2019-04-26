import React from "react";
import "../assets/Content.css";




class CarouselImg extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="grid-container">
          <img  src={require('../assets/img/cake3.jpg')} width={500} height={400} />
        </div>
        <div className="grid-container2">
          <div className="content-text">MY <span style={{color: "#F889A2"}}>CAKES</span> ARE <br></br> HANDCRAFTED<br></br> WITH LOVE.</div> 
          <div className="content-parra"><p>Ipsum loewm somehting goes here for cakes and <br/>Ipsum loewm somehting goes here <br/>Ipsum loewm somehting goes here for cakes <br/>Ipsum loewm somehting goes here for</p></div>
        </div>
      </React.Fragment>
    );
  }
}

export default CarouselImg;
