import React from "react";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
	FaDribbble,
} from "react-icons/fa";

const Copyright = () => {
	return (
		<div className="copyright">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<p>
							Copyrights &copy; 2024 - <a href="">Well care</a>, All Rights
							Reserved.
							<br />
							Distributed By - <a href="">Well Care</a>
						</p>
					</div>
					<div className="col-lg-6 text-right col-md-12">
						<div className="social-icons">
							<ul>
								<li>
									<a href="#" target="_blank">
										<FaFacebookF />
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										<FaTwitter />
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										<FaInstagram />
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										<FaLinkedin />
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										<FaDribbble />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Copyright;
