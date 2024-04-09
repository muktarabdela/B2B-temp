import { useState } from 'react'
import img from "../../../../assets/login_reg_res/images/img-01.png";
import supplierService from '../../../../services/supplier.service';
import { Link } from 'react-router-dom';

const SupplierLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        supplier_password: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault()
        const response = await supplierService.login(formData)
        if (response.status != "true") {
            // setServerResponse(`buyer can't register`);
            alert("supplier login successfully");
        }
        // else setServerResponse(`failed to register`);
        console.log(response)
    }
    console.log(formData)
    return (
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src={img} alt="IMG" />
                        </div>

                        <form className="login100-form validate-form" onSubmit={submitHandler}>
                            <span className="login100-form-title">Supplier Login</span>

                            <div className="wrap-input100 validate-input"
                                data-validate="Valid email is required: ex@abc.xyz"
                            >
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

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">Login</button>
                            </div>

                            <div className="text-center p-t-12">
                                <span className="txt1">Forgot</span>
                                <a className="txt2" href="#">
                                    Username / Password?
                                </a>
                                <div className="text-center text-blue-600">
                                    <Link to="/supplier/register">
                                        Create your Account
                                        <i
                                            className="fa fa-long-arrow-right m-l-5"
                                            aria-hidden="true"
                                        ></i>
                                    </Link>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>)
}

export default SupplierLogin