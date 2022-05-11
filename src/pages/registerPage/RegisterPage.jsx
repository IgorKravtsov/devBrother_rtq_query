import React from 'react';
import styles from './registerPage.module.scss';
import RegisterSection from "../../sections/registerSection/RegisterSection";
import {registerFormConfig} from "../../config";


const RegisterPage = () => {
    return (
        <div className={styles.wrapper}>
            <RegisterSection config={registerFormConfig}/>
        </div>
    );
};

export default RegisterPage;