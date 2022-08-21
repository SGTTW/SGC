import React, { Component } from "react";
import sg from "./sg.jpg";
// import './App.css';


class Login extends Component {
    state = {
        isPasswordShown: false
    }
    togglePasswordVisibility = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    }

    render = () => {
        const { isPasswordShown } = this.state;

        return (


            <div id="main-div">

                <marquee>welcome to your interruptible power source</marquee>
                <container id="main-container" className="d-grid h-100">
                    <form id="signIn" className="w-100 text-center">

                        <img
                            className="mb-3 sgLogo"
                            src={sg}
                            alt="sg" />
                        <h3 className="fx-3 fw-normal mb-3">Please sign in</h3>
                        <div>
                            <input controlId="sign-in-email-address" id="email" className="position-relative   border border-none" type="email" size="lg" placeholder="Email address" autoComplete="username" />

                        </div>
                        <div className="wrap-input100 validate-input">
                            <input
                                controlId="sign-in-password"
                                id="password"
                                className=" position-relative  mb-3 border border-none"
                                type={(isPasswordShown) ? "text" : "password"}
                                size="lg"
                                placeholder="Password"
                                autoComplete="current password"
                                name="pass"
                            />
                            <i
                                className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}
                                onClick={this.togglePasswordVisibility}
                            />
                        </div>
                        <div >
                            <a href="home.js" className="">forget password?</a>
                        </div>
                        <div>

                            <input controlId="remember-me"
                                type="checkbox" size="lg"
                                className="mb-3 mt-3" /> Remember me





                        </div>
                        <div className="d-flex align-items-left justify-content-left">
                            <button href="https://www.sgttw.rf.gd" variant="primary" className="btn btn-primary mb-3" size="lg">
                                {/* you can sign in here */}
                                Sign In please

                            </button>
                        </div>
                        <div>
                            <hr></hr>
                        </div>
                        <div className="text-right">
                            <p id="sign_up"><a href="">Sign up</a></p>
                        </div>

                        <p className="mt-5 text-muted">&copy; 2022</p>
                    </form>
                </container>
            </div>

        );
    }
}

export default Login;  