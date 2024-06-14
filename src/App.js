import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import './App.css'; // Assuming you have a global stylesheet

const App = () => {
  const links = [
    { path: '/', label: 'Home' },
    // Add more links here as needed
  ];

  return (
    <div className="h-full">
      <Router>
        <Navbar links={links} />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Add more routes here as needed */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
