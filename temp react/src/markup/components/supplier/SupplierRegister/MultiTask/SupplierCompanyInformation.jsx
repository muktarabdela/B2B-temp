import React from 'react'

const SupplierCompanyInformation = ({ formData, handleInputChange, step }) => {
    return (
        <div className={` ${step === 2 || step === 3 ? "lg:flex justify-between" : ""}`}>

            <div className={`lg:mr-20 `}>
                <div className={` ${step === 2 || step === 3 ? "wrap-input100 validate-input" : ""}`}>
                    <input
                        type="text"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                        className="input100"
                    />
                </div>

                <div className="wrap-input100 validate-input">
                    <input
                        type="text"
                        name="legal_structure"
                        value={formData.legal_structure}
                        onChange={handleInputChange}
                        placeholder="legal structure"
                        className="input100"
                    />
                </div>

                <div className="wrap-input100 validate-input">
                    <input
                        type="text"
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        placeholder="Region"
                        className="input100"
                    />
                </div>

                <div className="wrap-input100 validate-input">
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className="input100"
                    />
                </div>
                <div className="wrap-input100 validate-input">
                    <input
                        type="text"
                        name="woreda"
                        value={formData.woreda}
                        onChange={handleInputChange}
                        placeholder="Woreda"
                        className="input100"
                    />
                </div>

            </div>

            <div>
                <div className="wrap-input100 validate-input">
                    <input
                        type="text"
                        name="keble"
                        value={formData.keble}
                        onChange={handleInputChange}
                        placeholder="Keble"
                        className="input100"
                    />
                </div>

                <div className="wrap-input100 validate-input">
                    <input
                        type="text"
                        name="registration_number"
                        value={formData.registration_number}
                        onChange={handleInputChange}
                        placeholder=" registration Number"
                        className="input100"
                    />
                </div>

                <div className="wrap-input100 validate-input"
                    data-validate="Valid email is required: ex@abc.xyz"
                >
                    <input
                        onChange={handleInputChange}
                        value={formData.company_email}
                        type="text"
                        className="input100"
                        name="company_email"
                        placeholder="company Email"
                        required
                    />
                </div>

                <div
                    className="wrap-input100 validate-input"
                    data-validate="Valid email is required: ex@abc.xyz"
                >
                    <input
                        onChange={handleInputChange}
                        value={formData.company_phone_number}
                        className="input100"
                        type="text"
                        name="company_phone_number"
                        placeholder="company phone number"
                    ></input>

                </div>
                <div
                    className="wrap-input100 validate-input"
                >
                    <input
                        onChange={handleInputChange}
                        value={formData.owner_representative_name}
                        className="input100"
                        type="text"
                        name="owner_representative_name"
                        placeholder="owner representative name"
                    ></input>
                </div>

            </div>

        </div>
    )
}

export default SupplierCompanyInformation