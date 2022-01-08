import React, { Component } from 'react';
import './Auth.css'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { ConfigContext } from '../Context/ConfigContext'

/**
 * Login Page Component
 * @extends Component
 */
class LogIn extends Component {
    static contextType = ConfigContext;

    constructor() {
        super()
        if (localStorage.getItem("userType") == "manager")
            window.location.href = "/managermovieslist";
        else if (localStorage.getItem("userType") == "customer")
            window.location.href = "/customermovieslist";
        this.state = {
            user: {
                email: '',
                password: ''
            },
            rememberme: false,
            emptypass: false,
            emptyemail: false,
            status: 'not connected',
            invalid: false,
            errorMessage: ''
        }

    }

    /**
    * Component Mount state Intialization
    * 
    */
    componentDidMount = () => {

        this.setState(() => ({}))

        let show = localStorage.getItem("isLoggedIn");

        if (show === "true") {
            this.setState({ status: "connected" })
        }
        else {
            console.log("not logged")
            this.setState({ status: "not connected" })
        }

    }
    /**
    * Function to check the Email textbox has valid email format
    * @param {string} Email - user email.
    */
    validateEmail(email) {
        if (this.state.emptyemail === true)
            this.setState({ emptyemail: false });
        return this.checkValidity(email, "email");
    }

    checkValidity = (value, type) => {
        let isValid = true;
        if (value === undefined || value === "" || value === null) return false
        if (type === "email") {
            //const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            //isValid = pattern.test( value ) && isValid
        }

        if (type === "pass") {
            isValid = value.length >= 8 && isValid
        }

        if (type === "username") {
            const pattern = /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/;
            isValid = pattern.test(value) && isValid
        }

        if (type === "gender") {
            if (value === 0 || value === 1)
                isValid = true;
            else
                isValid = false;
        }

        return isValid;
    }

    /**
     * Function to check the Password textbox has valid password criteria
     * @param {string} Password - user password.
     */
    validatePassword(psw) {
        if (this.state.emptypass === true)
            this.setState({ emptypass: false });
        return this.checkValidity(psw, "pass");
    }
    /**
   * Function handling login request with Email and Password
   * 
   */
    handleLogin = event => {
        event.preventDefault();
        const user = { email: this.state.email, password: this.state.password }
        const memail = user.email;
        const mpsw = user.password;
        const is_email_valid = this.validateEmail(memail);
        const is_psw_valid = this.validatePassword(mpsw);

        if ((this.state.user.email === "" && this.state.emptyemail === false) || !is_email_valid)
            this.setState({ emptyemail: true });
        if ((this.state.user.password === "" && this.state.emptypass === false) || !is_psw_valid)
            this.setState({ emptypass: true });

        if (is_email_valid && is_psw_valid) {
            // Request Login

            const headers = {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
            axios.post(this.context.baseURL + '/guest/signin',
                {
                    "username": memail,
                    "password": mpsw
                },
                {
                    headers: headers
                }).then(res => {
                    console.log(res);
                    if (res.status === 200) // Successful
                    {

                        if (res.data.success === true) {
                            localStorage.setItem("isLoggedIn", 'true');
                            this.setState({ status: 'connected' });
                            localStorage.setItem("userType", res.data.role);
                            localStorage.setItem("userId", res.data.id);
                            localStorage.setItem("token", res.data.token);
                            localStorage.setItem("screenids", JSON.stringify(res.data.screenids));
                            window.location.reload(false);
                            if (res.data.role == "manager")
                                window.location.href = "/managermovieslist";
                            else
                                window.location.href = "/customermovieslist";
                        }
                        else {
                            this.setState({ errorMessage: res.data.name });
                        }
                    }
                    else { }
                }).catch(err => {
                    alert(err)
                })

        }
    }

    /**
    * Function handling change in password textbox to the page's state
    * 
    */
    handlePasswordChange = event => {
        event.preventDefault();
        if (this.state.emptypass === true)
            this.setState({ emptypass: false });
        var newpass = event.target.value;
        this.setState({ password: event.target.value });
        let userCopy = JSON.parse(JSON.stringify(this.state.user))
        userCopy['password'] = newpass;
        this.setState({
            user: userCopy
        })
    }

    /**
     * Function handling change in email textbox to the page's state
     * 
     */
    handleEmailChange = event => {
        event.preventDefault();
        if (this.state.emptyemail === true)
            this.setState({ emptyemail: false });
        var newemail = event.target.value;
        this.setState({ email: event.target.value });
        let userCopy = JSON.parse(JSON.stringify(this.state.user))
        userCopy['email'] = newemail;
        this.setState({
            user: userCopy
        })
    }

    render() {
        const logInOrNot = this.state.status;
        return (

            <div id="my-sign-up">
                {logInOrNot === "connected" ? (
                    <div>
                        <Navigate to="/customermovieslist" />
                    </div>
                )
                    :
                    (
                        <div style={{ minHeight: '80vh' }}>
                            {/* <img id="logo" src={spotify_black_logo} alt=""/> */}
                            <hr />
                            <div className="center-box-2">


                            </div>
                        </div>
                    )
                }
            </div>
        );
    }

}

export default LogIn;