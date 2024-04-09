import React from 'react'

const Hero = () => {
	return (
		<div className="hero-area hero-bg ">
			<div className="container">
				<div className="row">
					<div className="col-lg-9 offset-lg-2 text-center">
						<div className="hero-text">
							<div className="hero-text-tablecell">
								<p className="subtitle">All you want is here!</p>
								<h1>Welcome to our Drug store</h1>
								<div className="hero-btns">
									<a href="shop.html" className="boxed-btn">
										Products
									</a>
									<a href="contact.html" className="bordered-btn">
										Contact Us
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;