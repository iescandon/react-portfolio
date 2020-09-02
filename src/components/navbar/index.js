import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" classNamethe appropriate navigation link item
function Navbar() {
	function openNav() {
		document.getElementById('mySidenav').style.width = '250px';
	}

	function closeNav() {
		document.getElementById('mySidenav').style.width = '0';
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
			<div id="mySidenav" className="sidenav mr-auto">
				<a className="closebtn" onClick={() => closeNav()}>
					&times;
				</a>
				<a href="#" class="logo">
					<img
						src="./apple.png"
						id="sidenav-placeholder"
						class="my-2 mx-auto d-block logo"
					/>
				</a>
				<div>
					<ul className="">
						<li className="nav-item">
							<Link
								to="/"
								className={
									window.location.pathname === '/'
										? 'nav-link active'
										: 'nav-link'
								}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/about"
								className={
									window.location.pathname === '/about'
										? 'nav-link active'
										: 'nav-link'
								}
							>
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/portfolio"
								className={
									window.location.pathname === '/portfolio'
										? 'nav-link active'
										: 'nav-link'
								}
							>
								Portfolio
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/resume"
								className={
									window.location.pathname === '/resume'
										? 'nav-link active'
										: 'nav-link'
								}
							>
								Resume
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<span
				className="navbar-nav hamburger-icon mr-auto"
				onClick={() => openNav()}
			>
				&#9776;
			</span>
			<ul className="navbar-brand menu pt-4">
				<li>
					<a
						href="https://www.linkedin.com/in/iescandon/"
						className="fa fa-linkedin"
					></a>
				</li>
				<li>
					<a href="https://github.com/iescandon" className="fa fa-github"></a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/inescandon/?hl=en"
						className="fa fa-instagram"
					></a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
