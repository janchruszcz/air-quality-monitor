import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

require('dotenv').config();

class App extends React.Component {
  
  render() {
    return (
      <div class="h-full">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
