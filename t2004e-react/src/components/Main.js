import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';

const Main = () => {
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/about-us" exact>
				<AboutUs />
			</Route>
		</Switch>
	);
};

export default Main;
