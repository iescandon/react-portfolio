import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/resume" component={Resume} />
			</div>
		</Router>
	);
}

export default App;
