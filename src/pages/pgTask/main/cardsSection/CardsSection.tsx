import React, {FC, ReactElement} from 'react';
import styles from './cardsSection.module.scss';
import StackGrid from "react-stack-grid";
import Card from "./card/Card";
import {ICard} from "./cards";



export interface CardsSectionProps {
    cards: ICard[]
}

// const Grid = makeResponsive(measureItems(CSSGrid), {
//     maxWidth: 568,
//     minPadding: 10
//   });


const CardsSection:FC<CardsSectionProps> = ({cards}): ReactElement => {

    return (
        <section className="cards">
            <StackGrid
                columnWidth="40%"
                component="ul"
                itemComponent="li"
                gutterWidth={10}
                className={styles.wrapper}
            >
                    {cards.map((card, index) =>
                        <Card key={card.id} card={card} />
                    )}
            </StackGrid>
        </section>
    );
};

export default CardsSection;