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
		<nav className="navbar navbar-expand-lg">
			<div id="mySidenav" className="sidenav mr-auto">
				<a className="closebtn" onClick={() => closeNav()}>
					&times;
				</a>
				{/* <span className="logo">
					<img
						src="/apple.png"
						alt="apple logo"
						id="sidenav-placeholder"
						className="my-2 mx-auto d-block logo"
					/>
				</span> */}
				<div>
					<Link
						to="/"
						className={
							window.location.pathname === '/' ? 'nav-link active' : 'nav-link'
						}
					>
						<img
							src={require('./apple.png')}
							alt="apple logo"
							id="sidenav-placeholder"
							className="my-2 mx-auto d-block logo"
						/>
					</Link>
					<ul className="pl-4">
						<li className="nav-item">
							<Link
								to="/about"
								className={
									window.location.pathname === '/about'
										? 'nav-link active'
										: 'nav-link'
								}
							>
								ABOUT
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
								PORTFOLIO
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
								RESUME
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/contact"
								className={
									window.location.pathname === '/contact'
										? 'nav-link active'
										: 'nav-link'
								}
							>
								CONTACT
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<span
				className="navbar-nav hamburger-icon mr-auto"
				style={{ color: 'white' }}
				onClick={() => openNav()}
			>
				&#9776;
			</span>
			<ul className="navbar-icons menu pt-4">
				<li>
					<a
						href="https://www.linkedin.com/in/iescandon/"
						className="fa fa-linkedin"
						style={{ color: 'white' }}
					></a>
				</li>
				<li>
					<a
						href="https://github.com/iescandon"
						className="fa fa-github"
						style={{ color: 'white' }}
					></a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/inescandon/?hl=en"
						className="fa fa-instagram"
						style={{ color: 'white' }}
					></a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
