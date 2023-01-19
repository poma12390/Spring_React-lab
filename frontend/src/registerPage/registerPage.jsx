import React from "react";
import {withRouter} from "react-router-dom";
import RegisterContainer from "./registerContainer";

const RegisterPage = withRouter(({history})=>{
    return(<RegisterContainer history={history}/>)
});

export default RegisterPage;
