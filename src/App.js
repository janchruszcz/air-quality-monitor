import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Graphs from './views/Graphs';
import './App.css';

const App = () => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/graphs', label: 'Graphs' }
  ];

  return (
    <div className="h-full">
      <Router>
        <Navbar links={links} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/graphs" component={Graphs} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
