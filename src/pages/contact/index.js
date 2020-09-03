import React from 'react';
import Navbar from '../../components/navbar';
import './style.css';
import ContactTitle from '../../components/contact-title';
import ContactInfo from '../../components/contact-info';
import ContactForm from '../../components/contact-form';

function Contact() {
	return (
		<div>
			<Navbar />
			<div className="container-fluid background-contact">
				<div className="row">
					<ContactTitle />
				</div>
				<div className="row">
					<div className="col-9">
						<ContactForm />
					</div>
					<div className="col-3">
						<ContactInfo />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
