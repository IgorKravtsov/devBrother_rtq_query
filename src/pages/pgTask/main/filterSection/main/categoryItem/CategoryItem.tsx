import React, {FC, useMemo, useState} from 'react';
import styles from './categoryItem.module.scss';
import {ICategory} from "../../../../../../store/types/_app/categories";
import {useDispatch} from "react-redux";
import {deleteCategory, saveCategory, deleteActiveCategory, addActiveCategory} from "../../../../../../store/slices/categoriesSlice";
import {useTypedSelector} from "../../../../../../hooks/useTypedSelector";
import Error from "../../../../../../components/error/Error";

export interface CategoryItemProps {
    category: ICategory
    isActive: boolean
}

const CategoryItem:FC<CategoryItemProps> = ({category, isActive}) => {

    const dispatch = useDispatch();
    const {categories} = useTypedSelector(state => state.categories)

    const [isEdit, setIsEdit] = useState(!category.data)
    const [error, setError] = useState('')
    const [categoryVal, setCategoryVal] = useState(category.data || '')

    const saveCategoryFunc = () => {
        if(categoryVal !== '') {
            const candidate = categories.find(category => category.data === categoryVal)
            if(!candidate) {
                const copyCategory = {...category, data: categoryVal}
                dispatch(saveCategory(copyCategory))
                setIsEdit(false)
                setError('')
            } else {
                setError("Such category already exists")
            }
        } else {
            setError("Empty category is invalid")
        }
    }

    const toggleActiveCategory = () => {
        isActive ? dispatch(deleteActiveCategory(category.id)) :  dispatch(addActiveCategory(category.id))
    }

    return (
        <li className={[styles.wrapper, error !== '' ? styles.wrapper_with_error : ''].join(' ')}>
            {!isEdit ?
                <>
                    <p className={styles.category}>{category.data}</p>
                    <button onClick={() => setIsEdit(true)} className={styles.btn}>E</button>
                    <button onClick={() => dispatch(deleteCategory(category))} className={styles.btn}>X</button>
                    <button onClick={toggleActiveCategory} className={styles.btn}>{isActive ? 'Active'  : 'Not active'}</button>
                </>:
                <>
                    <input className={styles.input} value={categoryVal} onChange={e => setCategoryVal(e.target.value)} />
                    <button onClick={saveCategoryFunc} className={styles.btn}>Save</button>
                    <button onClick={() => dispatch(deleteCategory(category))} className={styles.btn}>X</button>
                </>}
            {<Error isVisible={error !== ''} classNames={styles.error}>{error}</Error>}
        </li>
    );
};

export default CategoryItem;