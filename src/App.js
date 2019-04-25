import React from 'react';
import Navigation from './Components/Navbar';
import CarouselImg from './Components/Carousel';



function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navigation/>
        <CarouselImg/>
      </div>
    </React.Fragment>
  );
}

export default App;
