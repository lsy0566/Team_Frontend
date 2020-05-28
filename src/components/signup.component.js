import React, { Component } from "react";
import './signup.component.css';

const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};

export default class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            phonenumber: '',
            subphonenumber: '',
            isError: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    // 서버로 회원가입 양식 제출
    handleSummit = e => {
        e.preventDefault();
        const signupData = {
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
          phonenumber: this.state.phonenumber,
          subphonenumber: this.state.subphonenumber
        }

        // 양식 전달 방식
        const signup_info = {
            method: "POST",
            body: JSON.stringify(signupData),
            headers: {
              "Content-Type": "application/json"
            }
          };
        // 양식 보내기
        if (signup_info) {
            fetch("http://localhost:3001/sign-up")
              .then(alert("가입이 완료되었습니다."))
              .then(this.props.history.push("/sign-in"));
          } else {
            alert("입력값을 확인해주세요");
          }
    };

    onSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(this.state)
        } else {
            console.log("Form is invalid!");
        }
    };


    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
    };


    render() {
        const { isError } = this.state;
        return (
            <form onSubmit={this.onSubmit} noValidate>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"} placeholder="Enter email" 
                    name="email"
                    onChange={this.formValChange} />
                    {isError.email.length > 0 && (<span className="invalid-feedback">{isError.email}</span>)}
                    <small className="text-danger">Email is required.</small>
                </div>


                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"} placeholder="Enter password" 
                    name="password"
                    onChange={this.formValChange}/>
                    {isError.password.length > 0 && (<span className="invalid-feedback">{isError.password}</span>)}
                    <small className="text-danger">Password is required.</small>
                </div>
          
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username"
                    name="username" />
                    <small className="text-danger">Name is required.</small>
                </div>

                <div className="form-group">
                    <label>PhoneNumber</label>
                    <input type="password" className="form-control" placeholder="PhoneNumber" 
                    name="phonenumber"/>
                    <small className="text-danger">Phone no. is required.</small>
                </div>

                <div className="form-group">
                    <label>Alternate PhoneNumber</label>
                    <input type="password" className="form-control" placeholder="Any other or Landline no (if any)" 
                    name="subphonenumber"/>
                </div>

                <button onClick={this.handleSummit} type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="http://localhost:3000/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}