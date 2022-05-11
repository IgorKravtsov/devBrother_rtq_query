import React, {useEffect, useState} from 'react';
import styles from './pgTask.module.scss';
import Header from "./header/Header";
import Main from "./main/Main";


const PgTask = () => {

    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scroll]);

    return (
        <>
            <div className={styles.container}>
                <Header />
                <Main />
            </div>
        </>
    );
};

export default PgTask;