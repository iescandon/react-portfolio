import React from 'react';
import './style.css';

function AboutInfo() {
	return (
		<div className="about-info">
			<div className="text px-5 py-5">
				<h1 className="header mb-5 mt-5">
					About <span className="name">Inez</span>
				</h1>
				My name is Inez Escandon and I am currently attending The Houston Coding
				Bootcamp provided by UT Austin. I am looking to change careers into web
				development and I am excited about the challenge.
				<br />
				<br />
				I am currently working as an elementary teacher and have worked as one
				for 10 years. In addition to my bachelors degree in Bilingual Education,
				I have a masters degree in Instructional Technology. It was during my
				masters degree where I was first introduced to programming and coding. I
				fell in love with it and have been working to transition into it ever
				since.
				<br />
				<br />
				After finding The Houston Coding Bootcamp, I decided to make the leap
				and am currently building up the skills necessary to be able to work
				full time in the industry.
			</div>
		</div>
	);
}

export default AboutInfo;
