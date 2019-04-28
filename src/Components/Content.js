import React from "react";
import "../assets/Content.css";

class CarouselImg extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div id="col0" className="column" />
          <div className="column"><img src={require('../assets/img/cake1.jpg')} width={"100%"} height={"300px"}/></div>
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
            Ipsum loewm somehting goes here for cakes and <br />
            Ipsum loewm somehting goes here <br/>
            Ipsum loewm somehting goes here for cakes <br />
            Ipsum loewm somehting goes here for
          </p>
        </div>
          </div>
          <div id="col2" className="column">
            <img src={require('../assets/img/cake3.jpg')} width={"100%"} height={"300px"} />
          </div>
          <div id="col0" className="column" />
        </div>
        <div className="row">
          <div id="col0" className="column" />
          <div id="col3" className="column">
          <img src={require('../assets/img/cake1.jpg')} width={"100%"} height={"400px"} />
          </div>
          <div id="col4" className="column">
          <img src={require('../assets/img/chef.jpg')} width={"100%"} height={"400px"} />
          </div>
          <div id="col5" className="column">
          <img src={require('../assets/img/cake3.jpg')} width={"100%"} height={"400px"} />
          </div>
          <div id="col0" className="column" />
        </div>
        <div className="row">
          <div id="col0" className="column"/>
          <div id="col6" className="column">
            Column
          </div>
          <div id="col7" className="column">
            Column
          </div>
          <div id="col8" className="column">
            Column
          </div>
          <div id="col9" className="column">
          Column
          </div>
          <div id="col10" className="column">
          Column
        </div>
          <div id="col0" className="column" />
        </div>
        <div class="footer">
          <p>Footer</p>
        </div>
      
      </React.Fragment>
    );
  }
}

export default CarouselImg;
