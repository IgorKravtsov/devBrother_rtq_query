import React, {FC, ReactElement} from 'react';
import styles from './categoryLine.module.scss';
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";


export interface CategoryLineProps {
    setIsShowFilters: Function
}

const CategoryLine:FC<CategoryLineProps> = ({setIsShowFilters}): ReactElement => {

    const {categories} = useTypedSelector(state => state.categories)

    return (
        <>
            <button onClick={() => setIsShowFilters(true)}>show</button>
            <ul className={styles.wrapper}>
                {categories.map((category,index) =>
                    <li key={category.id} className={styles.list_item}>
                        {category.data}
                    </li>
                )}
            </ul>
        </>
    );
};

export default CategoryLine;