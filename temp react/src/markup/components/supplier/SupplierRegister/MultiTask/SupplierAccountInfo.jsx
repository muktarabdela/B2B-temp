import React from 'react'

const SupplierAccountInfo = ({ formData, handleInputChange }) => {
    return (
        <div>
            <div className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz">
                <input
                    onChange={handleInputChange}
                    value={formData.email}
                    type="text"
                    className="input100"
                    name="email"
                    placeholder="Email"
                    required
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
            </div>

            {/* buyer password input */}
            <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
            >
                <input
                    onChange={handleInputChange}
                    value={formData.supplier_password}
                    className="input100"
                    type="supplier_password"
                    name="supplier_password"
                    placeholder="Password"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
            </div>

            {/* buyer phone number input */}
            <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
            >
                <input
                    onChange={handleInputChange}
                    value={formData.phone_number}
                    className="input100"
                    type="text"
                    name="phone_number"
                    placeholder="Phone Number"
                ></input>

            </div>

            {/* buyer securityQuestion */}
            {/* <div
                className="wrap-input100 validate-input"
            >
                <select name="security_question"
                    value={formData.security_question}
                    onChange={handleInputChange}
                    id="contentType" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl h-[4em] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    <option value="">Select security question</option>
                    <option value="What is your mother's maiden name?">What is your mother&apos;s maiden name?</option>
                    <option value="What is the name of your first pet?">What is the name of your first pet?</option>
                    <option value="What is the city of your birth?">What is the city of your birth?</option>
                    <option value="What is your favorite movie?">What is your favorite movie?</option>
                    <option value="What is the name of your favorite teacher?">What is the name of your favorite teacher?</option>
                </select>
            </div> */}

            {/* buyer securityAnswer */}
            <div
                className="wrap-input100 validate-input"
            >
                <input
                    type="text"
                    name="answer_one"
                    value={formData.answer_one}
                    onChange={handleInputChange}
                    placeholder="Answer"
                    className='input100'
                />

            </div>

            <div
                className="wrap-input100 validate-input"
            >
                <input
                    type="text"
                    name="heard_about_us"
                    value={formData.heard_about_us}
                    onChange={handleInputChange}
                    placeholder="heard About Us"
                    className='input100'
                />

            </div>
        </div>
    )
}

export default SupplierAccountInfo