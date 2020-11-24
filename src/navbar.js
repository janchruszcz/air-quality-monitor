import logo from './logo2.png';
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './dashboard';
import Graphs from './graphs';

class Navbar extends React.Component {
    
  render() { 
    return (
    <BrowserRouter>
      <nav class="bg-gray-700">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-20">
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center">
                <img class="h-10 w-24" src={logo} alt="aqm" />
              </div>
              <div class="hidden sm:block sm:ml-16">
                <div class="flex space-x-4 antialiased">
                  <Link to="/" class="px-4 py-2 rounded-md text-sm font-medium uppercase tracking-widest text-white bg-green-600 shadow-lg hover:text-md">Dashboard</Link>
                  <Link to="/graphs" class="px-4 py-2 rounded-md text-sm font-medium uppercase tracking-widest text-white bg-green-600 shadow-lg">Graphs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>  
        <Route path="/graphs">
          <Graphs />
        </Route>  
      </Switch>
    </BrowserRouter>
  )}
}

export default Navbar;
