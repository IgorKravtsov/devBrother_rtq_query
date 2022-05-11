import React, {FC, ReactElement} from 'react';
import styles from './categoriesSearch.module.scss';

export interface CategorySearchProps {
    setIsShowFilters: Function
}

const CategorySearch:FC<CategorySearchProps> = ({setIsShowFilters}): ReactElement => {
    return (
        <>
            <ul className={styles.wrapper}>
                <li className={styles.input_wrapper}>
                    <input className={styles.input} disabled type="text"/>
                    <span className={styles.question}>?</span>
                </li>
                <li className={styles.burger_wrapper}>
                    <button onClick={() => setIsShowFilters(prevState => !prevState)} className={[styles.btn, styles.burger].join(' ')}>
                        <span className={styles.burger_item}/>
                        <span className={[styles.burger_item, styles.burger_item_long].join(' ')}/>
                        <span className={styles.burger_item}/>
                    </button>
                </li>
            </ul>
        </>
    );
};

export default CategorySearch;