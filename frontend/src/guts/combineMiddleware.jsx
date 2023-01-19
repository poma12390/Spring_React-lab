import {applyMiddleware} from "redux";
import loginMiddleware from "../loginPage/loginMiddleware";
import registerMiddleware from "../registerPage/registerMiddleware";
import mainMiddleware from "../mainPage/mainMiddleware";
export default applyMiddleware(loginMiddleware, registerMiddleware, mainMiddleware);