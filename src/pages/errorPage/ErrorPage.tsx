import React from 'react';
import styles from './errorPage.module.scss';
import {useNavigate} from "react-router-dom";
import Header from "../../components/header/Header";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header/>
            <main className={styles.wrapper}>
                <h1 className={styles.title}>AN ERROR OCCURED!</h1>
                <p className={styles.link} onClick={() => navigate(-2)}>to previous page --&gt;</p>
            </main>
        </>
    );
};

export default ErrorPage;