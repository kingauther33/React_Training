import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App components
import Home from "./Home";
import About from './About';
import Header from './Header';
import Teachers from './Teachers';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/teacher">
        <Teachers />
      </Route>
      <Route exact path="/courses">
        <About />
      </Route>
    </div>
  </BrowserRouter>
);

export default App;