import React, {FC, ReactElement, useState} from 'react';
import styles from './categoriesSection.module.scss';
import CategoryLine from "./categoryLine/CategoryLine";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import CategorySearch from "./categorySearch/CategorySearch";
import Portal from "../../../../components/portal/Portal";
import FilterSection from "../filterSection/FilterSection";

export interface CategoriesSectionProps {

}

const CategoriesSection:FC<CategoriesSectionProps> = (): ReactElement => {

    const {categories} = useTypedSelector(state => state.categories);
    const [isShowFilters, setIsShowFilters] = useState(false);

    const catLength = categories.length;

    return (
        <>
            <section className="categories">
                {catLength < 6 ?
                    <CategoryLine setIsShowFilters={setIsShowFilters} /> :
                    <CategorySearch setIsShowFilters={setIsShowFilters}/>
                }
            </section>
            {isShowFilters &&
                <Portal>
                    <FilterSection setIsVisible={setIsShowFilters}/>
                </Portal>}
        </>
    );
};

export default CategoriesSection;