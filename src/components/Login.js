import React, { Component } from "react";
import sg from "./sg.jpg";

// import Form  from "react-bootstrap/Form";

class Login extends Component {

    render() {

        return (


            <div  >
                <div id="main-container" className="d-grid">
                    <div className="Form text-center">

                        <img  src={sg} width='80'
                            alt="sg" />
                        <h3>Please sign in </h3>

                    </div>
                </div>
            </div>

        );
    }
}

export default Login;