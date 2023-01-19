import React from "react";
import {withRouter} from "react-router-dom";
import LoginContainer from "./LoginContainer";

const LoginPage = withRouter((props)=>{
    return(<LoginContainer history={props.history}/>)
});

export default LoginPage;
