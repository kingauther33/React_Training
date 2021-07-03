import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

// App components
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About title="About" />
        </Route>
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic?/:name" component={Featured}/>
        <Route path="/courses" component={Courses} />
        {/* <Route exact path="/courses" component={Courses}>
      <Route exact path="/courses" render={ () => <Courses title='About'/>}> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
