import React from 'react';
import './style.css';

function ContactInfo() {
	return (
		<div className="text-center">
			<section>
				<ul>
					<li>
						<a
							href="https://www.google.com/maps/place/Houston,+TX+77054/@29.681496,-95.4433694,13z/data=!3m1!4b1!4m5!3m4!1s0x8640c01d4be3966f:0xe4d769ccefee11df!8m2!3d29.6849782!4d-95.3991907"
							className="fa-icons"
							target="blank"
						>
							<span className="fa fa-map-marker fa-2x"></span>
						</a>
						<p>HOUSTON, TX 77054, USA</p>
					</li>
					<li>
						<a href="tel:1-281-330-8004" className="fa-icons">
							<span className="fa fa-phone mt-4 fa-2x"></span>
						</a>
						<p>830-352-7507</p>
					</li>
					<li>
						<a href="mailto:iescan4@gmail.com" className="fa-icons">
							<span className="fa fa-envelope mt-4 fa-2x"></span>
						</a>
						<p>IESCAN4@GMAIL.COM</p>
					</li>
				</ul>
			</section>
		</div>
	);
}

export default ContactInfo;
