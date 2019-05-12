import React, { Component } from "react";
import Bill_Marriot from "../img/employees/bill_marriott.jpg";
import Seth from "../img/employees/seth.jpg";
import Russell from "../img/employees/realCEO.jpeg";
import Lester from "../img/employees/lester.jpg";
// if we want to add more https://news.marriott.com/p/executive-leadership/

class About extends Component {
	render() {
		return (
			<main>
				<section className="team">
					<div className="container">
						<div className="row">
							<div className="col-md-10 col-md-offset-1">
								<div className="col-lg-12">
									<h6 className="description">OUR TEAM</h6>
									<div className="row pt-md">
										<div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
											<div className="img-box">
												<img
													src={Bill_Marriot}
													alt=""
													style={{ width: 210, height: 210 }}
													className="img-responsive"
												/>
											</div>
											<h1>Bill Marriott</h1>
											<h2>Owner</h2>
											<p>I started this company from nothing.</p>
										</div>

										<div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
											<div className="img-box">
												<img
													src={Russell}
													alt=""
													style={{ width: 210, height: 210 }}
													className="img-responsive"
												/>
											</div>
											<h1>Russell Carter</h1>
											<h2>CEO</h2>
											<p>With great power comes great responsibility.</p>
										</div>

										<div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
											<div className="img-box">
												<img
													src={Seth}
													alt=""
													style={{ width: 210, height: 210 }}
													className="img-responsive"
												/>
											</div>
											<h1>Seth Vinson</h1>
											<h2>CTO</h2>
											<p>I'm just tryna pass lol.</p>
										</div>

										<div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
											<div className="img-box">
												<img
													src={Lester}
													alt=""
													style={{ width: 210, height: 210 }}
													className="img-responsive"
												/>
											</div>
											<h1>Lester Docker</h1>
											<h2>COO</h2>
											<p>I need a new job.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
}
export default About;
