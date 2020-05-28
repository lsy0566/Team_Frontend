import React, { Component } from 'react';
import { Router } from 'react-router-dom';

 import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import logout from './logout';
import Update from './updateuser';
import Main from './main';



export default class mypage extends Component {
  render() {
    return ( 
      <div>
        마이페이지 입니다.
      </div>
      // <form>
      //    <div className="mypage">
      //     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      //       <div className="container">
      //         <Link className="navbar-brand" to={"/"}>Sixth-sence</Link>
      //         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      //           <ul className="navbar-nav ml-auto">
      //             <li className="nav-item">
      //               <Link className="nav-link" to={"/update"}>회원정보수정</Link>
      //             </li>
      //             <li className="nav-item">
      //               <Link className="nav-link" to={"/logout"}>logout</Link>
      //             </li>
      //           </ul>
      //         </div>
      //       </div>
      //     </nav>
      //   </div> 

      //   <div>로그인되었습니다.</div>
        
      //   <Switch>
      //     <Route exact path="/"  />
      //     <Route path="/logout"  />
      //     <Route path="/update" component={Update} />
      //   </Switch>
      //   </form>
    );
  }
}