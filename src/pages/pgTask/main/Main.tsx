import React, {FC, ReactElement, useEffect, useMemo, useState} from 'react';
import styles from './main.module.scss';
import CategoriesSection from "./categoriesSection/CategoriesSection";
import CardsSection from "./cardsSection/CardsSection";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {ICard} from "./cardsSection/cards";
import * as util from "../../../util";
import {peopleImages} from "../../../assets/productImages";
import {ICategory} from "../../../store/types/_app/categories";

export interface MainProps {

}

const Main:FC<MainProps> = (): ReactElement => {
    const {categories, activeCategories} = useTypedSelector(state => state.categories)

    const cards: ICard[] = [
            {
                name: 'name1',
                categories: util.getRandomCategories(categories),
                img: util.getRandomImage(peopleImages),
                id: util.getRandomString()
            },
            {
                name: 'name2',
                categories: util.getRandomCategories(categories),
                img: util.getRandomImage(peopleImages),
                id: util.getRandomString()
            },
            {
                name: 'name3',
                categories: util.getRandomCategories(categories),
                img: util.getRandomImage(peopleImages),
                id: util.getRandomString()
            },
            {
                name: 'name4',
                categories: util.getRandomCategories(categories),
                img: util.getRandomImage(peopleImages),
                id: util.getRandomString()
            },
            {
                name: 'name5',
                categories: util.getRandomCategories(categories),
                img: util.getRandomImage(peopleImages),
                id: util.getRandomString()
            },
            {
                name: 'name6',
                categories: util.getRandomCategories(categories),
                img: util.getRandomImage(peopleImages),
                id: util.getRandomString()
            },
        ]


    const [cardsState, setCardsState] = useState<ICard[]>([])

    useEffect(() => {
        if(!activeCategories) {
            setCardsState(cards)
            console.log("length=0")
        } else {
            const activeCards: ICard[] = [];
            for(let i = 0; i < cards.length; ++i) {
                let cardCategories = cards[i].categories
                const categoriesEntries = cardCategories.filter(cardCategory => activeCategories?.includes(cardCategory.id))
                if(categoriesEntries.length > 0) {
                    activeCards.push(cards[i])
                }
            }
            setCardsState(activeCards)
        }
        console.log(activeCategories)
    }, [categories, activeCategories])

    useEffect(() => {
        console.log("CARDS", cardsState)
    }, [cardsState])

    return (
        <main className={[styles.wrapper,  window.scrollY > 15 ? styles.wrapper_hidden : '' ].join(' ')}>
            <CategoriesSection />
            <CardsSection cards={cardsState} />
        </main>
    );
};

export default Main;