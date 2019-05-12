import React, { Component } from "react";

class Home extends Component {
	render() {
		return (
			<main>
				<section>
					<div className="welcome_info">
						<div className="col-xs-12 col-sm-6 col-md-6">
							<h1>WELCOME TO THE MARRIOTT</h1>
						</div>

						<div className="col-xs-12 col-sm-6 col-md-6">
							<p>
								The Marriott has been voted the best hotel in America 5 years in
								a row. Visit our reservations page to schedule your getaway
								today!
							</p>
						</div>
					</div>

					<div className="welcome_border" />

					<div className="contact_info">
						<div>
							<h3>HEADQUARTERS</h3>

							<div>
								<p>
									Bethesda,
									<br /> MD,
									<br /> USA
									<br />
								</p>
							</div>

							<div id="contact_number">
								<a href="tel:18005354028">
									<p>
										1-800-535-4028 <br />
									</p>
								</a>
							</div>

							<div id="contact_email">
								<a href="mailto: contact@marriott.com">
									<p>contact@marriott.com</p>
								</a>
							</div>
						</div>
					</div>

					<div className="hours_of_operation">
						<h3>Founded</h3>
						<p>1957, 62 years ago</p>

						<div className="hours_of_operation">
							<h3>Areas Served</h3>
							<p>Worldwide</p>
						</div>

						<div className="hours_of_operation">
							<h3>Number of Locations</h3>
							<p>566 hotels</p>
						</div>
					</div>
				</section>
			</main>
		);
	}
}

export default Home;
