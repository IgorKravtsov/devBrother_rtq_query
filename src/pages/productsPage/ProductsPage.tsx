import React, {useEffect} from 'react';
import styles from './productsPage.module.scss';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import TotalCountCard from "../../components/totalCountCard/TotalCountCard";
import {LocalstorageKey} from "../../types/LocalstorageKey";
import {StateStatus} from "../../interfaces/StateStatus";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useDispatch} from "react-redux";
import {useGetPeopleQuery} from "../../api/peopleSlice";
import {useGetStarshipsQuery} from "../../api/starshipsSlice";
import Header from "../../components/header/Header";

const ProductsPage = () => {

    // const {getStarshipsData, getPeopleData} = useActions();
    // const {people, starships} = useTypedSelector(state => state.swapiReducer);
    // const {getAllStarships} = useTypedSelector(state => state.request.starships);
    // const {getAllPeople} = useTypedSelector(state => state.request.people);

    const {
        data: people,
        // isError: peopleIsError,
        isLoading: peopleIsLoading,
        error: peopleError
    } = useGetPeopleQuery(null);

    const {
        data: starships,
        // isError: starshipsIsError,
        isLoading: starshipsIsLoading,
        error: starshipsError
    } = useGetStarshipsQuery(null);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     fetchAll();
    // }, [])
    //
    // const fetchAll = () => {
    //     dispatch(starships.get());
    //     dispatch(people.get());
    //     // getStarshipsData();
    //     // getPeopleData();
    // }

    return (
        <>
            <Header/>
            <main className={styles.wrapper}>
                <div className={styles.title_wrapper}>
                    <h2 className={styles.title}>CHOOSE STARWARS DATA YOU WANT</h2>
                </div>
                <ul className={styles.cards}>
                    <li className={styles.cardListItem}>
                        <TotalCountCard
                            path='/products/starships'
                            title="Starships"
                            totalCount={starships?.count}
                            isLoading={starshipsIsLoading}
                            error={starshipsError?.toString()}
                        />
                    </li>
                    <li className={styles.cardListItem}>
                        <TotalCountCard
                            path='/products/people'
                            title="People"
                            totalCount={people?.count}
                            isLoading={peopleIsLoading}
                            error={peopleError?.toString()}
                        />
                    </li>
                </ul>
            </main>
        </>
    );
};

export default ProductsPage;