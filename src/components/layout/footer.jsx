import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<section id="footer">
			<div className="container">
				<div className="row text-center text-xs-center text-sm-left text-md-left">
					<div className="col-xs-12 col-sm-4 col-md-4">
						<h5> Quick Links</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<NavLink exact={true} to="/">
									<i className="fa fa-angle-double-right" /> Home
								</NavLink>
							</li>
							<li>
								<NavLink exact={true} to="/about">
									<i className="fa fa-angle-double-right" /> About Us
								</NavLink>
							</li>
							<li>
								<NavLink exact={true} to="/reservations">
									<i className="fa fa-angle-double-right" /> Make Reservations
								</NavLink>
							</li>
							<li>
								<NavLink exact={true} to="/suite">
									<i className="fa fa-angle-double-right" />
									Suite
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-8 col-md-8">
						<h5> Our mission</h5>
						<p>
							Marriott International is an American multinational diversified
							hospitality company that manages and franchises a broad portfolio
							of hotels and related lodging facilities. Founded by J. Willard
							Marriott, the company is now led by his sons, Russell Carter, Seth
							Vinson, and Lester Docker. Marriott International is the largest
							hotel chain in the world. It has 30 brands with more than 7000
							properties in 130 countries and territories around the world, over
							1.2 million rooms (as of September 2017), and an additional
							195,000 rooms in the development pipeline.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
