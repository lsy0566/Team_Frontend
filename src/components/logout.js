import React, { Component } from 'react';
import { Link, Router, Route, Switch } from "react-router-dom";
import Login from './login';
import SignUp from './signup.component';

export default class logout extends Component {
  render() {
    return (
      <div>로그아웃되었습니다.</div>
    );
  }
}