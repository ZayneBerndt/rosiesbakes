import React from 'react';
import Navigation from './Components/Navbar';
import Content from './Components/Content';
import Booking from './Components/Booking';
import { Route } from 'react-router-dom';




function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navigation/>
        <Content/>
        <Route path="/Booking" component={Booking} />
      </div>
    </React.Fragment>
  );
}

export default App;
