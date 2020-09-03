import React from 'react';
import NavbarLight from '../../components/navbar-light';
import PortfolioTitle from '../../components/portfolio-title';
import PortfolioItems from '../../components/portfolio-items';
import './style.css';

function Portfolio() {
	return (
		<div>
			<NavbarLight />
			<div className="container-fluid">
				<PortfolioTitle />
				<PortfolioItems />
			</div>
		</div>
	);
}

export default Portfolio;
