import React from "react";
import "../assets/Content.css";

class CarouselImg extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div id="col0" className="column" />
          <div className="column"><img src={require('../assets/img/cake1.jpg')} alt="pic" width={"100%"} height={"400px"}/></div>
          <div id="col0" className="column" />
        </div>
        <div className="row">
          <div id="col0" className="column" />
          <div id="col1" className="column">
          <div className="content-text">
          MY <span style={{ color: "#F889A2" }}>CAKES</span> ARE <br />{" "}
          HANDCRAFTED<br /> WITH LOVE.
        </div>
        <div className="content-parra">
          <p>
           I’ve loved baking since I was a little girl, my first “baking” memories are making pretend cakes with mud and leaves, until my wonderful mum bought me a children’s oven.</p>
        </div>
          </div>
          <div id="col2" className="column">
            <img src={require('../assets/img/cake3.jpg')} alt="pic" width={"100%"} height={"300px"} />
          </div>
          <div id="col0" className="column" />
        </div>
        <div className="row">
          <div id="col0" className="column" />
          <div id="col3" className="column">
          <img src={require('../assets/img/cake1.jpg')} alt="pic" width={"100%"} height={"400px"} />
          </div>
          <div id="col4" className="column">
          <img src={require('../assets/img/chef.jpg')} alt="pic" width={"100%"} height={"400px"} />
          </div>
          <div id="col5" className="column">
          <img src={require('../assets/img/slice.jpg')} alt="pic" width={"100%"} height={"400px"} />
          </div>
          <div id="col0" className="column" />
        </div>
        <div className="row" >
          <div id="textrow">MY CAKE COLLECTION</div>
        </div>
        <div className="row">
          <div id="col0" className="column"/>
          <div id="col6" className="column">
          <img src={require('../assets/img/cake1.jpg')} alt="pic" width={"100%"} height={"250px"} />
          </div>
          <div id="col7" className="column">
          <img src={require('../assets/img/wedding.jpg')} alt="pic" width={"100%"} height={"250px"} />
          </div>
          <div id="col8" className="column">
          <img src={require('../assets/img/cake3.jpg')} alt="pic" width={"100%"} height={"250px"} />
          </div>
          <div id="col9" className="column">
          <img src={require('../assets/img/slice.jpg')} alt="pic" width={"100%"} height={"250px"} />
          </div>
          <div id="col10" className="column">
          <img src={require('../assets/img/birthday.jpg')} alt="pic" width={"100%"} height={"250px"} />
        </div>
          <div id="col0" className="column" />
        </div>
        <div className="row" >
          <div id="textrow">INSTAGRAM</div>
          
        </div>
        <div class="footer">
          <p>Zayne Berndt 2019 copyright</p>
        </div>
      
      </React.Fragment>
    );
  }
}

export default CarouselImg;
