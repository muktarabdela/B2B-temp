import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import img from "../../../assets/images/logo.png";
import search from "../../../assets/images/search_logo.png"
import discount from "../../../assets/images/discount_logo.png"
import cart from "../../../assets/images/cart_logo.png"
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
	return (
		<div className="">
			<>
				<header onload="navbar() ">
					<div className="navbar bg-red-800">
						<div className="upper">
							<a href="./index.html" className="logo">
								<img src={img} alt="Logo" />
							</a>
							<div className="search-bar">
								<div className="search-bar-container">
									<img src={search} alt="searchLogo" />
									<input
										type="text"
										className="search"
										placeholder="Search for Medicine and Healthcare items"
									/>
									<button className="search-btn">Search</button>
								</div>
							</div>
							<details>
								<summary>
									<span>Healthcare</span>
									<svg width={24} height={24} viewBox="0 0 24 24" strokeWidth="1px">
										<path
											fill="currentColor"
											fillRule="evenodd"
											d="M16.6 8.6L12 13.2 7.4 8.6 6 10l6 6 6-6z"
										/>
									</svg>
								</summary>
								<div className="healthcare-div">
									<div className="healthcare-div-right">
										<div className="healthcare-div-right-menuLinks">
											<div className="A101 menuItems configFlexDisplay">
												<div>
													<p>Covid Test Kits</p>
													<Link to="/supplier/login">Supplier</Link>
												</div>
												<div>
													<p>Disinfectants</p>
													<Link to="/buyer/login">Buyer</Link>
												</div>
												<div>
													<p>Home Hygiene Essentials</p>
													<Link to="/admin/login">Admin</Link>
												</div>
												<div>
													<p>Masks</p>
													<span>All Masks</span>
												</div>
												<div>
													<p>Hand Sanitizers</p>
													<span>All Hand Sanitizers</span>
												</div>
												<div>
													<p>Hand Wash</p>
													<span>All Hand Wash</span>
												</div>
												<div>
													<p>Gloves</p>
													<span>All Gloves</span>
												</div>
												<div>
													<p>Immunity Boosters</p>
													<span>All Immunity Boosters</span>
												</div>
												<div>
													<p>Devices</p>
													<span>All Devices</span>
												</div>
												<div>
													<p>Toilet Essentials</p>
													<span>All Toilet Essentials</span>
												</div>
												<div>
													<p>Offers - Covid Essentials</p>
													<span>All Offers - Covid Essentials</span>
												</div>
												<div>
													<p>Cold &amp; Cough</p>
													<span>All Cold &amp; Cough</span>
												</div>
											</div>

										</div>
									</div>
								</div>
							</details>


							<div className="link-section">
								<div className="log-in-link">
									<div className="header-icons">
										<a href="">SignIn/Register</a>
										<ul className="sub-menu">
											<li>
												<Link to="/supplier/login">Supplier</Link>
											</li>
											<li>
												<Link to="/buyer/login">Buyer</Link>
											</li>
											<li>
												<Link to="/admin/login">Admin</Link>
											</li>
										</ul>
										<a className="shopping-cart" href="">
											<FaShoppingCart />
										</a>
										<a className="shopping-cart" href="">
											<FaSearch />
										</a>
									</div>
								</div>
								<div className="offers-link">
									<a href="#">
										<img src={discount} alt="discount" />
										<span>Offers</span>
									</a>
								</div>
								<div className="cart-link">
									<a href="./cart.html">
										<img src={cart} alt="cart" />
										<span>Cart</span>
									</a>
								</div>
							</div>
						</div>
						<hr />
						<div className="lower">
							<a href="./searchmed.html">
								<span>Medicine</span>
							</a>
							<details>
								<summary>
									<span>Healthcare</span>
									<svg width={24} height={24} viewBox="0 0 24 24" strokeWidth="1px">
										<path
											fill="currentColor"
											fillRule="evenodd"
											d="M16.6 8.6L12 13.2 7.4 8.6 6 10l6 6 6-6z"
										/>
									</svg>
								</summary>
								<div className="healthcare-div">
									<div className="healthcare-div-left">
										<div className="healthcare-div-left-menuHeadings">
											<span className="A101">Covid Essentials</span>
											<span className="A102">Mega Clearance Sale</span>
											<span className="A103">Personal Care</span>
											<span className="A104">Healthcare Devices</span>
											<span className="A105">Health Food and Drinks</span>
										</div>
									</div>
									<div className="healthcare-div-right">
										<div className="healthcare-div-right-menuLinks">
											<div className="A101 menuItems configFlexDisplay">
												<div>
													<p>Covid Test Kits</p>
													<span>All Covid Test Kits</span>
												</div>
												<div>
													<p>Disinfectants</p>
													<span>All Disinfectants</span>
												</div>
												<div>
													<p>Home Hygiene Essentials</p>
													<span>All Home Hygiene Essentials</span>
												</div>
												<div>
													<p>Masks</p>
													<span>All Masks</span>
												</div>
												<div>
													<p>Hand Sanitizers</p>
													<span>All Hand Sanitizers</span>
												</div>
												<div>
													<p>Hand Wash</p>
													<span>All Hand Wash</span>
												</div>
												<div>
													<p>Gloves</p>
													<span>All Gloves</span>
												</div>
												<div>
													<p>Immunity Boosters</p>
													<span>All Immunity Boosters</span>
												</div>
												<div>
													<p>Devices</p>
													<span>All Devices</span>
												</div>
												<div>
													<p>Toilet Essentials</p>
													<span>All Toilet Essentials</span>
												</div>
												<div>
													<p>Offers - Covid Essentials</p>
													<span>All Offers - Covid Essentials</span>
												</div>
												<div>
													<p>Cold &amp; Cough</p>
													<span>All Cold &amp; Cough</span>
												</div>
											</div>
											<div className="A102 menuItems">
												<div>
													<p>Mega Clearance Sale</p>
													<span>All Mega Clearance Sale</span>
												</div>
											</div>
											<div className="A103 menuItems">
												<div>
													<p>Men Care</p>
													<span>All Men Care</span>
												</div>
												<div>
													<p>Appliances</p>
													<span>All Appliances</span>
												</div>
												<div>
													<p>Women Care</p>
													<span>All Women Care</span>
												</div>
												<div>
													<p>Oral Care</p>
													<span>All Oral Care</span>
												</div>
												<div>
													<p>Male grooming</p>
													<span>All Male grooming</span>
												</div>
												<div>
													<p>Hair Care</p>
													<span>All Hair Care</span>
												</div>
												<div>
													<p>Face Care</p>
													<span>All Face Care</span>
												</div>
												<div>
													<p>Body Care</p>
													<span>All Body Care</span>
												</div>
												<div>
													<p>Hands &amp; Feet</p>
													<span>All Hands &amp; Feet</span>
												</div>
											</div>
											<div className="A104 menuItems">
												<div>
													<p>Glucometer</p>
													<span>All Glucometer</span>
												</div>
												<div>
													<p>BP Monitors</p>
													<span>All BP Monitors</span>
												</div>
												<div>
													<p>Oximeter</p>
													<span>All Oximeter</span>
												</div>
												<div>
													<p>Covid Kits</p>
													<span>All Covid Kits</span>
												</div>
												<div>
													<p>Air Mattress</p>
													<span>All Air Mattress</span>
												</div>
												<div>
													<p>Body Massager</p>
													<span>All Body Massager</span>
												</div>
												<div>
													<p>Nebulizer</p>
													<span>All Nebulizer</span>
												</div>
												<div>
													<p>Spirometers</p>
													<span>All Spirometers</span>
												</div>
												<div>
													<p>Trimmers</p>
													<span>All Trimmers</span>
												</div>
											</div>
											<div className="A105 menuItems">
												<div>
													<p>Nutritional Drinks</p>
													<span>All Nutritional Drinks</span>
												</div>
												<div>
													<p>Health Food</p>
													<span>All Health Food</span>
												</div>
												<div>
													<p>Diabetic Care</p>
													<span>All Diabetic Care</span>
												</div>
												<div>
													<p>Beverages</p>
													<span>All Beverages</span>
												</div>
												<div>
													<p>Weight Management</p>
													<span>All Weight Management</span>
												</div>
												<div>
													<p>Ayurvedic Foods &amp; Juices</p>
													<span>All Ayurvedic Foods &amp; Juices</span>
												</div>
												<div>
													<p>Baby Food</p>
													<span>All Baby Food</span>
												</div>
												<div>
													<p>Pregnancy Nutrition</p>
													<span>All Pregnancy Nutrition</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</details>
							<a href="#">
								<span>Lab Tests</span>
							</a>
							<a href="#">
								<span>Offers</span>
							</a>
							<a href="#">
								<span>PLUS</span>
							</a>
							<a href="#">
								<span>Health Blogs</span>
							</a>
						</div>
						<hr />
					</div>
				</header>
			</>
		</div>
	);
};

export default Header;
