import React, {FC, useMemo} from 'react';
import styles from './panelCartCount.module.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import * as util from '../../util';

export interface PanelCartPanelProps {
    isVisible: boolean
}

const PanelCartPanel:FC<PanelCartPanelProps> = ({isVisible}) => {
    const {people, starships} = useTypedSelector(state => state.cart);


    return (
        <ul className={[styles.wrapper, isVisible ? styles.wrapper_active : ''].join(' ')}>
            {<li><h5 className={styles.text}>STARSHIPS: {util.getCountItems(starships) || 0}</h5></li>}
            {<li><h5 className={styles.text}>PEOPLE: {util.getCountItems(people) || 0}</h5></li>}
        </ul>
    );
};

export default PanelCartPanel;