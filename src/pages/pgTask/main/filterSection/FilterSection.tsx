import React, {FC} from 'react';
import styles from './filterSection.module.scss';
import Header from "./header/Header";
import Main from "./main/Main";

export interface  FilterSectionProps {
    setIsVisible: Function;
}

const FilterSection:FC<FilterSectionProps> = ({setIsVisible}) => {
    return (
        <div className={styles.wrapper}>
            <Header setIsVisible={setIsVisible}/>
            <Main/>
        </div>
    );
};

export default FilterSection;