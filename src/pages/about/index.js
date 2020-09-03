import React from 'react';
import Navbar from '../../components/navbar';
import AboutImg from '../../components/about-img/index';
import AboutInfo from '../../components/about-info';
import './style.css';

function About() {
	return (
		<div>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col pl-0 pr-0 mx-0 my-0">
						<AboutImg />
					</div>
					<div className="col pl-0 pr-0 mx-0 my-0">
						<AboutInfo />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
