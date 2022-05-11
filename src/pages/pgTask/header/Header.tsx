import React, {FC, ReactElement} from 'react';
import styles from './header.module.scss';
import defaultUserImg from './img/defaultAvatar.png';
import {socials} from "./img/socials";
import cart from './img/cart_1.png';

export interface HeaderProps {
}

const Header:FC<HeaderProps> = (): ReactElement => {

    return (
        <header className="header">
            <ul className={styles.header}>
                <li className={styles.header_list_item}>
                    <p className={styles.user_img_wrapper}>
                        <img className={styles.user_img} src={defaultUserImg} alt="user"/>
                    </p>
                    <ul className={styles.socials_list_wrapper}>
                        <li className={styles.socials_list_item}>
                            <ul className={styles.socials_wrapper}>
                                {socials.map((social, index) =>
                                    <li className={styles.socials_item} key={social}>
                                        <p className={styles.socials_img_wrapper}><img className={styles.socials} src={social} alt={social + index}/></p>
                                    </li>
                                )}
                                <li className={styles.socials_item}>
                                    <p className={styles.socials_img_wrapper}>
                                        <img className={styles.socials} src={cart} alt="cart"/>
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li><p className={[styles.name, window.scrollY > 15 ? styles.name_scrolled : ''].join(' ')}>NAME</p></li>
                    </ul>

                </li>
                <li className={[styles.hide_area,  window.scrollY > 15 ? styles.hide_area_hidden : ''].join(' ')}>
                    <section>
                    <p className={styles.hide_area_text}>Name</p>
                    <p className={styles.hide_area_text}>
                        <span>Amet aut doloremque excepturi, exercitationem harum inventore magnam mollitia nihil officiis pariatur perspiciatis quas repellat vero? Adipisci corporis eligendi ex harum hic labore maxime mollitia, obcaecati, quo reprehenderit rerum, vitae.</span>
                    </p>
                </section></li>
            </ul>

        </header>
    );
};

export default Header;
