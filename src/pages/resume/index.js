import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Pdf from './InezEscandonCoding.pdf';

function Resume() {
	return (
		<a href={Pdf} target="_blank">
			Click here to download PDF resume.
		</a>
		// <Link to={Pdf} target="_blank"></Link>
	);
}

export default Resume;
