import { useState } from "react";
import img from "../../../../assets/login_reg_res/images/img-01.png";
import supplierService from "../../../../services/supplier.service";
import SupplierAccountInfo from "./MultiTask/SupplierAccountInfo";
import SupplierCompanyInformation from "./MultiTask/SupplierCompanyInformation";
import SupplierTaxAndLegalInformation from "./MultiTask/SupplierTaxAndLegalInformation";
import SupplierBankInfo from "./MultiTask/SupplierBankInfo";

const SupplierRegister = () => {
	// state for store buyer data
	const [formData, setFormData] = useState({
		company_name: "",
		legal_structure: "",
		registration_number: "",
		region: "",
		city: "",
		woreda: "",
		keble: "",
		company_email: "",
		company_phone_number: "",
		email: "",
		supplier_password: "",
		owner_representative_name: "",
		phone_number: "",
		heard_about_us: "",
		answer_one: "",
		answer_two: "answer 2",
		tax_identification_number: "",
		tax_registration_number: "",
		license_renewal_date: "",
		license_expire_date: "",
		tax_registration_documents: "",
		business_licenses_or_permits: "",
		other_legal_documents: "",
		warranty_information: "",
		bank_name: "",
		account_number: "",
		routing_number: "",
	});

	const [serverResponse, setServerResponse] = useState();
	const [step, setStep] = useState(1);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const handleNext = () => {
		setStep(step + 1);
	};
	const handlePrevious = () => {
		setStep(step - 1);
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		if (step === 4) {
			const response = await supplierService.register(formData);
			console.log(response);
			if (response.status != "true") {
				setServerResponse(`buyer can't register`);
				alert("buyer registered successfully");
			} else
				setServerResponse(`supplier registered ${formData.email} successfully`);
		}
	};
	console.log(formData);
	const renderStep = () => {
		switch (step) {
			case 1:
				return (
					<div>
						{
							<SupplierAccountInfo
								formData={formData}
								handleInputChange={handleInputChange}
								step={step}
							/>
						}
					</div>
				);
			case 2:
				return (
					<div>
						{
							<SupplierCompanyInformation
								formData={formData}
								handleInputChange={handleInputChange}
								step={step}
							/>
						}
					</div>
				);
			case 3:
				return (
					<div>
						{
							<SupplierTaxAndLegalInformation
								formData={formData}
								handleInputChange={handleInputChange}
								step={step}
							/>
						}
					</div>
				);
			case 4:
				return (
					<div>
						{
							<SupplierBankInfo
								formData={formData}
								handleInputChange={handleInputChange}
								step={step}
							/>
						}
					</div>
				);
			default:
				return null;
		}
	};
	return (
		<div>
			<div className="limiter">
				<div className="container-login100">
					<div
						className={`wrap-login100 ${step === 2 || step === 3 ? "mx-auto" : ""
							}`}
					>
						<div
							className={`login100-pic js-tilt ${step === 2 || step === 3 ? "hidden" : ""
								}`}
							data-tilt
						>
							<img src={img} alt="IMG" />
						</div>
						<form
							onSubmit={submitHandler}
							className={`'login100-form validate-form ${step === 2 || step === 3 ? "mx-auto" : ""
								}`}
						>
							<span className="login100-form-title">Supplier Register</span>
							<h3 className="server-response">{serverResponse}</h3>
							{renderStep()}
							<div className="flex justify-evenly">
								{step > 1 && (
									<button
										className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mt-10"
										onClick={handlePrevious}
									>
										Previous
									</button>
								)}
								{step < 4 && (
									<button
										className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mt-10"
										onClick={handleNext}
									>
										Next
									</button>
								)}
								<div className={`mt-10 ${step === 2 || step === 3 ? "" : ""}`}>
									{step === 4 && (
										<button
											className="login100-form-btn bg-green-500"
											type="submit"
										>
											{" "}
											Register
										</button>
									)}
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SupplierRegister;
