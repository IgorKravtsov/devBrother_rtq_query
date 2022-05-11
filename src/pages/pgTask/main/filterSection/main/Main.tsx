import React, {FC, ReactElement, useEffect, useState} from 'react';
import styles from './main.module.scss';
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";
import CategoryItem from "./categoryItem/CategoryItem";
import {addCategory} from "../../../../../store/slices/categoriesSlice";
import {useDispatch} from "react-redux";
import {ICategory} from "../../../../../store/types/_app/categories";
import * as util from "../../../../../util";

const Main:FC = (): ReactElement => {

    const {categories, activeCategories} = useTypedSelector(state => state.categories);
    const dispatch = useDispatch();

    const [categoryState, setCategoryState] = useState<ICategory[]>([]);


    useEffect(() => {
        setCategoryState(categories)
    }, [categories, activeCategories])

    const createNewCategory = (): ICategory => {
        return {
            id: util.getRandomString(),
            data: null
        }
    }

    return (
        <ul className={styles.wrapper}>
            <li className={styles.title_wrapper}>
                <p className={styles.title}>Categories</p>
                <button onClick={() => dispatch(addCategory(createNewCategory()))} className={styles.btn}>+</button>
            </li>
            <li>
                <ul>
                    {categoryState.map(category =>
                        <CategoryItem
                            key={category.id}
                            category={category}
                            isActive={activeCategories?.includes(category.id) || false}
                        />
                    )}
                </ul>
            </li>
        </ul>
    );
};

export default Main;