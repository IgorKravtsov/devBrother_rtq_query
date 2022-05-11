import React, {FC} from 'react';
import styles from './header.module.scss';
import backArrow from './img/back_arrow.svg';

export interface HeaderProps {
    setIsVisible: Function;
}


const Header:FC<HeaderProps> = ({setIsVisible}) => {
    return (
        <header>
            <ul className={styles.wrapper}>
                <li><p onClick={() => setIsVisible(false)} className={styles.img_wrapper}><img className={styles.img} src={backArrow} alt="back"/></p></li>
                <li><h2 className={styles.title}>Filters</h2></li>
            </ul>
        </header>
    );
};

export default Header;