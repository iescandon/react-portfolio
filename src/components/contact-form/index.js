import React from 'react';
import './style.css';

function ContactForm() {
	return (
		<div className="justify-content-center ml-5 mr-5">
			<form>
				<div className="row">
					<div className="col-md-6">
						<label for="name">NAME</label>
						<input
							type="text"
							formControlName="name"
							className="form-control"
						/>
					</div>
					<div className="col-md-6">
						<label for="email">EMAIL</label>
						<input
							type="text"
							formControlName="email"
							className="form-control"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="md-form mb-0 mt-2">
							<label for="subject">SUBJECT</label>
							<input
								type="text"
								formControlName="subject"
								className="form-control"
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="md-form mt-2">
							<label for="message">MESSAGE</label>
							<input
								type="text"
								formControlName="message"
								className="form-control"
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col mt-4 mb-5">
						<button className="btn" type="submit">
							SUBMIT
						</button>
					</div>
					<div className="status"></div>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
