import React, { Component } from "react";
import './login.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import mypage from './mypage';
import Http from '../api';
import Main from "./main";

export default class Login extends Component {

    // state = { images: [] };
    
    // onLoginSubmit = async text => {
    //     const response = await Http.get('/', {
    //         params: { query: text}
    //     });

    //     this.setState({ images: response.data.result });
    // }

    render() {
        return (
            <form> 
                <h3>Login In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <div className="form-group">
                    <Link to="/mypage">
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </Link>
                </div>

                <p className="forgot-password text-right">
                    Forgot password? <a href="https://www.naver.com/"> Contact us </a>
                </p>


                <Switch>
                    <Route exact path="/mypage" component={mypage} />
                </Switch>
            </form>
        );
    }
}
