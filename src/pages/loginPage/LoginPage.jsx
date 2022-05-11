import React from 'react';
import LoginSection from "../../sections/loginSection/LoginSection";
import styles from './loginPage.module.scss';
import {loginFormConfig} from "../../config";

const LoginPage = () => {
    return (
        <div className={styles.wrapper}>
            <LoginSection config={loginFormConfig}/>
        </div>
    );
};

export default LoginPage;