import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const SupplierTaxAndLegalInformation = ({ formData, handleInputChange, step }) => {
    const [selectedDateRenewal, setSelectedDateRenewal] = useState(formData.license_renewal_date ? new Date(formData.license_renewal_date) : null);
    const [selectedDateExpire, setSelectedDateExpire] = useState(formData.license_renewal_date ? new Date(formData.license_expire_date) : null);

    return (
        <div className={` ${step === 2 || step === 3 ? "lg:flex justify-between" : ""}`}>
            <div className='lg:mr-20 '>
                <div className="wrap-input100 validate-input">
                    <input
                        type="text"
                        name="tax_identification_number"
                        value={formData.tax_identification_number}
                        onChange={handleInputChange}
                        placeholder="Tax Identification Number"
                        className="input100"
                    />
                </div>

                <div className="wrap-input100 validate-input">
                    <input
                        type="text"
                        name="tax_registration_number"
                        value={formData.tax_registration_number}
                        onChange={handleInputChange}
                        placeholder="Tax Registration Number"
                        className="input100"
                    />
                </div>

                {/* <div className="wrap-input100 validate-input">
                    <input
                        type="text"
                        name="license_renewal_date"
                        value={formData.license_renewal_date}
                        onChange={handleInputChange}
                        placeholder="License Renewal Date"
                        className="input100"
                    />
                </div> */}

                <div className="wrap-input100  relative left-5">
                    <label htmlFor="datepicker" className="block text-sm font-medium ">
                        License Renewal Date:
                    </label>
                    <DatePicker
                        placeholderText="MM/DD/YYYY"
                        id="datepicker"
                        selected={selectedDateRenewal}
                        onChange={(date) => {
                            setSelectedDateRenewal(date);
                            handleInputChange({
                                target: {
                                    name: "license_renewal_date",
                                    value: date ? new Date(date.setUTCHours(0)).toISOString().split('T')[0] : ""
                                }
                            });
                        }}
                        className="z-100 text-gray-500 wrap-input100 relative left-5  py-3 px-3 border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 rounded-xl shadow-sm"
                    />
                </div>



                {/* <div className="wrap-input100 validate-input">
                    <input
                        type="text"
                        name="license_expire_date"
                        value={formData.license_expire_date}
                        onChange={handleInputChange}
                        placeholder="License Expire Date"
                        className="input100"
                    />
                </div> */}

                <div className="wrap-input100  relative left-5">
                    <label htmlFor="datepicker" className="block text-sm font-medium ">
                        license expire date:
                    </label>
                    <DatePicker
                        placeholderText="MM/DD/YYYY"
                        id="datepicker"
                        selected={selectedDateExpire}
                        onChange={(date) => {
                            setSelectedDateExpire(date);
                            handleInputChange({
                                target: {
                                    name: "license_expire_date",
                                    value: date ? new Date(date.setUTCHours(0)).toISOString().split('T')[0] : ""
                                }
                            });
                        }}
                        className="z-50 text-gray-500 wrap-input100 relative left-5  py-3 px-3 border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 rounded-xl shadow-sm"
                    />
                </div>

            </div>

            <div>
                <div className="wrap-input100 validate-input">
                    <input
                        type="text"
                        name="tax_registration_documents"
                        value={formData.tax_registration_documents}
                        onChange={handleInputChange}
                        placeholder="Tax Registration Documents"
                        className="input100"
                    />
                </div>

                <div className="wrap-input100 validate-input">

                    <input
                        type="text"
                        name="business_licenses_or_permits"
                        value={formData.business_licenses_or_permits}
                        onChange={handleInputChange}
                        placeholder="Business Licenses or Permits"
                        className="input100"

                    />
                </div>

                <div className="wrap-input100 validate-input">
                    <input
                        type="text"
                        name="other_legal_documents"
                        value={formData.other_legal_documents}
                        onChange={handleInputChange}
                        placeholder="Other Legal Documents"
                        className="input100"
                    />
                </div>
                <div className="wrap-input100 validate-input">
                    <input
                        type="text"
                        name="warranty_information"
                        value={formData.warranty_information}
                        onChange={handleInputChange}
                        placeholder="warranty information"
                        className="input100"
                    />
                </div>
            </div>

        </div>
    )
}

export default SupplierTaxAndLegalInformation