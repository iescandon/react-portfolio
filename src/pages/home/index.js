import React from 'react';
import './style.css';
import Jumbotron from '../../components/jumbotron/index';
import Navbar from '../../components/navbar/index';

function Home() {
	return (
		<div className="container-fluid background-img">
			<Navbar />
			<Jumbotron />
		</div>
	);
}

export default Home;
