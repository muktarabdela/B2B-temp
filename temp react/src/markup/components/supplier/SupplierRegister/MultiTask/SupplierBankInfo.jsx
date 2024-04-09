import React from 'react'

const SupplierBankInfo = ({ formData, handleInputChange, step }) => {
    return (
        <div>
            <div className="wrap-input100 validate-input">
                <input
                    type="text"
                    name="bank_name"
                    value={formData.bank_name}
                    onChange={handleInputChange}
                    placeholder="bank name"
                    className="input100"
                />
            </div>
            <div className="wrap-input100 validate-input">
                <input
                    type="text"
                    name="account_number"
                    value={formData.account_number}
                    onChange={handleInputChange}
                    placeholder="account number"
                    className="input100"
                />
            </div>
            <div className="wrap-input100 validate-input">
                <input
                    type="text"
                    name="routing_number"
                    value={formData.routing_number}
                    onChange={handleInputChange}
                    placeholder="routing number"
                    className="input100"
                />
            </div>
        </div>
    )
}

export default SupplierBankInfo