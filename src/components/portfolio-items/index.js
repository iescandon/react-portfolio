import React from 'react';
import './style.css';

function PortfolioItems() {
	return (
		<div className="items">
			<div className="row pics pt-5">
				<div className="col my-auto pl-0 pr-0">
					<img
						src={require('./images/salud.png')}
						alt="salud"
						className="image img-fluid"
					/>
					<a href="https://salud-cocktails.herokuapp.com/home">
						<div className="overlay">
							<div className="textPort">
								<h6>SALUD!</h6>
								<p>
									Salud! was a labor of love for its creators. In the week and a
									half we had to build Salud!, we learned and implemented both
									Angular and JSON Web Tokens. We built our database from
									scratch using MySQL and Sequelize, and used ngBootstrap for
									front-end styling. The idea grew from a desire to have a
									lightweight, unintrusive way to find and save our favorite
									cocktail recipes. We hope this app makes the good times better
									for anyone who uses it!
								</p>
							</div>
						</div>
					</a>
				</div>
				<div className="col pl-0 pr-0">
					<img
						src={require('./images/burger-app.png')}
						alt="burger app"
						className="image img-fluid"
					/>
					<a href="https://obscure-lowlands-97631.herokuapp.com/">
						<div className="overlay">
							<div className="textPort">
								<h6>EAT DA BURGER</h6>
								<p>
									This application is a full-stack application designed as a
									burger logger that utilizes MySQL, Express, Handlebars and a
									homemade ORM. The user can view burgers, create burgers, and
									eat burgers all of which are rendered immediately based on the
									up-to-date database. MVC design pattern was followed, Node and
									MySQL were used to query and route data in the app, while
									Handlebars was used to generate the HTML.
								</p>
							</div>
						</div>
					</a>
				</div>

				<div className="col pl-0 pr-0">
					<img
						src={require('./images/ask-winston.png')}
						alt="ask winston"
						className="image img-fluid"
					/>
					<a href="https://on-your-marc-go.github.io/Ask-Winston-Music-Rec-Engine/">
						<div className="overlay">
							<div className="textPort">
								<h6>ASK WINSTON</h6>
								<p>
									Ask Winston is a music recommendation search engine created by
									Marc Arguijo, Ramon Garza III, and Inez Escandón. This
									application allows the user to search by artist or song to get
									similar artists or songs respectively. Top songs, artists, and
									albums are also available for those who would just like
									popular music recommendation of the month.
								</p>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div className="row pics pb-5">
				<div className="col pl-0 pr-0">
					<img
						src={require('./images/note-taker.png')}
						alt="note taker"
						className="image img-fluid"
					/>
					<a href="https://sleepy-crag-82469.herokuapp.com/">
						<div className="overlay">
							<div className="textPort">
								<h6>NOTE TAKER</h6>
								<p>
									This application is designed to function as a note taker. The
									user can create notes, save notes, view notes, and even delete
									notes with ease. These notes get pushed to the server allowing
									for these notes to be stored and not lost. Notes get written
									to a db.json file. HTML and CSS are simple and minimalistic to
									make the application aesthetically appealing and user
									friendly.
								</p>
							</div>
						</div>
					</a>
				</div>

				<div className="col pl-0 pr-0">
					<img
						src={require('./images/code-quiz.png')}
						alt="code quiz"
						className="image img-fluid"
					/>
					<a href="https://iescandon.github.io/code-quiz/">
						<div className="overlay">
							<div className="textPort">
								<h6>CODE QUIZ</h6>
								<p>
									Code Quiz is an application that tests your knowledge of
									coding. The user is being timed throughout the quiz and is
									provided with immediate feedback on whether their answer was
									correct/incorrect and which answer was the correct choice if
									their answer was incorrect. The user is allowed to save their
									highscore into local storage allowing them to view it at
									anytime.
								</p>
							</div>
						</div>
					</a>
				</div>

				<div className="col pl-0 pr-0">
					<img
						src={require('./images/weather-dashboard.png')}
						alt="weather dashboard"
						className="image img-fluid"
					/>
					<a href="https://iescandon.github.io/weather-dashboard/">
						<div className="overlay">
							<div className="textPort">
								<h6>WEATHER DASHBOARD</h6>
								<p>
									Weather Dashboard is an application that displays current
									weather information as well as a 5 day forecast. User utilizes
									the search bar to search for the city of their choice.
									Previously searched cities get saved as buttons under search
									bar. Current weather provides you with temperature, humidity,
									wind speed, UV Index, and an icon representing the weather.
								</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default PortfolioItems;
