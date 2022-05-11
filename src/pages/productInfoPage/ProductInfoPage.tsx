import React, {FC, memo, useEffect, useState} from 'react';
import styles from './productInfo.module.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate, useParams} from "react-router-dom";
import {LocalstorageKey} from "../../types/LocalstorageKey";
import {LocalstorageValue} from "../../types/LocalstorageValue";
import ProductInfoHeader from "../../sections/productsInfoView/productInfoHeader/ProductInfoHeader";
import ProductCardsView from "../../sections/productsInfoView/productCardsView/ProductCardsView";
import ProductListView from "../../sections/productsInfoView/productListView/ProductListView";
import {peopleImages, starshipImages} from "../../assets/productImages";
import {useActions} from "../../hooks/useActions";
import * as util from "../../util";
import {RouteNames} from "../../routes";
import Spinner from "../../components/spinner/Spinner";
import {StateStatus} from "../../interfaces/StateStatus";
import {useDispatch} from "react-redux";
import {useGetPeopleQuery} from '../../api/peopleSlice'
import {useGetStarshipsQuery} from "../../api/starshipsSlice";
import Header from "../pgTask/header/Header";

export interface ProductInfoPageProps {

}

const ProductInfoPage:FC<ProductInfoPageProps> = memo(() => {
    const [nowView, setNowView] = useState(localStorage.getItem(LocalstorageKey.ProductsView) || LocalstorageValue.ProductCardView);

    const {type} = useParams();
    const isStarships = type === 'starships';

    const {
        data: people,
        isError: peopleIsError,
        isLoading: peopleIsLoading
    } = useGetPeopleQuery(null);

    const {
        data: starships,
        isError: starshipsIsError,
        isLoading: starshipsIsLoading
    } = useGetStarshipsQuery(null);

    const {starships: starshipsCart, people: peopleCart} = useTypedSelector(state => state.cart);

    const navigate = useNavigate();


    useEffect(() => {
        const err = isStarships ? peopleIsError : starshipsIsError;
        if(err) {
            navigate(RouteNames.ERROR);
        }
    }, [peopleIsError, starshipsIsError])

    useEffect(() => {
        util.saveCartToLocalstorage(peopleCart, starshipsCart)
    }, [starshipsCart, peopleCart])

    const changeView = (viewToChange: string) => {
        localStorage.setItem(LocalstorageKey.ProductsView, viewToChange);
        setNowView(viewToChange);
    }

    return (
        <>
            <Header/>
            <main className={styles.wrapper}>
            <ProductInfoHeader setView={changeView} nowView={nowView}/>

                {peopleIsLoading ||
                starshipsIsLoading ? <Spinner/> : null}

                {nowView === LocalstorageValue.ProductCardView ?
                    <ProductCardsView
                        type={isStarships ? 'starships':'people'}
                        data={isStarships ? starships?.results : people?.results}
                        images={isStarships ? starshipImages : peopleImages}
                    /> :
                    <ProductListView
                        type={isStarships ? 'starships':'people'}
                        data={isStarships ? starships?.results : people?.results}
                        images={isStarships ? starshipImages : peopleImages}
                    />}
            </main>
        </>
    );
});

export default ProductInfoPage;