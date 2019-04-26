import React from 'react';
import Navigation from './Components/Navbar';
import Content from './Components/Content';



function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navigation/>
        <Content/>
      </div>
    </React.Fragment>
  );
}

export default App;
