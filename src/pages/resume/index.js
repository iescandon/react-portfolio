import React from 'react';
import NavbarLight from '../../components/navbar-light';
import './style.css';
import ResumeInfo from '../../components/resume-info';

function Resume() {
	return (
		<div>
			<NavbarLight />
			<div className="container-fluid">
				<ResumeInfo />
			</div>
		</div>
	);
}

export default Resume;
