import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import {JSXElementConstructor, ReactElement} from "react";

// export const MainRoute = "/";
// export const LoginRoute = "/login";
// export const RegisterRoute = "/register";

export interface IRoute {
    path: string;
    element: ReactElement<any, string | JSXElementConstructor<any>>;
}

export enum RouteNames {
    MAIN='/',
    LOGIN='/login',
    REGISTER='/register',
    PRODUCTS='/products',
    ERROR='/error',
    CART='/cart',
    TASK='/task',

}


export const routes =  [
    { path: RouteNames.LOGIN, element: 'LoginPage' },
    { path: RouteNames.REGISTER, element: 'RegisterPage' },
]