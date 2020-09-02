import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home/index';
import About from './pages/about/index';
import Portfolio from './pages/portfolio/index';
import Resume from './pages/resume/index';

function App() {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/resume" component={Resume} />
			</div>
		</Router>
	);
}

export default App;
