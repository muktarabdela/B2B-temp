import React from "react";
import {
	FaHome,
	FaInfoCircle,
	FaShoppingCart,
	FaNewspaper,
	FaEnvelope,
	FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="footer-box about-widget">
							<h2 className="widget-title">About us</h2>
							<p>
								Discover convenience and care with wellcare. As your trusted
								online destination for pharmaceuticals and wellness essentials,
								we're committed to delivering quality products right to your
								doorstep. With a wide selection, expert advice, and fast
								delivery, we're here to support your journey to better health.
								Thank you for choosing wellcare for all your healthcare needs.
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="footer-box get-in-touch">
							<h2 className="widget-title">Get in Touch</h2>
							<ul>
								<li> Addis Ababa.</li>
								<li>support@wellcare.com</li>
								<li>+25190000000</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="footer-box">
							<h2 className="widget-title">Pages</h2>
							<ul>
								<li>
									<a href="index.html">
										<FaHome />
										<span>Home</span>
									</a>
								</li>
								<li>
									<a href="about.html">
										<FaInfoCircle />
										<span>About</span>
									</a>
								</li>
								<li>
									<a href="services.html">
										<FaShoppingCart />
										<span>Shop</span>
									</a>
								</li>
								<li>
									<a href="news.html">
										<FaNewspaper />
										<span>News</span>
									</a>
								</li>
								<li>
									<a href="contact.html">
										<FaEnvelope />
										<span>Contact</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="footer-box subscribe">
							<h2 className="widget-title">Subscribe</h2>
							<p>Subscribe to our mailing list to get the latest updates.</p>
							<form action="index.html">
								<input type="email" placeholder="Email" />
								<button type="submit">
									<FaPaperPlane />
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
