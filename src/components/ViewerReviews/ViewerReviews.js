import "./ViewerReviews.scss";
import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

Swiper.use([Navigation, Pagination]);
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";

const swiper = new Swiper('.viewer-reviews__container', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.viewer-reviews__button-next',
        prevEl: '.viewer-reviews__button-prev'
    },
    pagination: {
        el: '.viewer-reviews__swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    grabCursor: true,
    loop: true,
    slideToClickedSlide: true,
    slidesPerView: 3,
    watchOverflow: false,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: false,
    effect: 'slide',
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".viewer-reviews__container",
    },
});

function ViewerReviews() {
    useEffect(() => {
        swiper.init()
    }, []);

    return (
        <section className="viewer-reviews">
            <div className="viewer-reviews__header">
                <h2 className="viewer-reviews__title">Отзывы зрителей</h2>
                <div className="viewer-reviews__navigation-wrapper">
                    <div className="viewer-reviews__swiper-pagination"></div>
                    <div className="viewer-reviews__button-prev"></div>
                    <div className="viewer-reviews__button-next"></div>
                </div>
            </div>
            <div className="viewer-reviews__container">
                <div className="viewer-reviews__wrapper swiper-wrapper">
                    <div className="swiper-slide viewer-review">
                        <p className="viewer-review__text">Что-то похожее на эффект от мультфильмов типа «Сауз Парк» или
                            про
                            коня Боджэка возникает — я думаю, и пьеса написана с этой интонацией американских взрослых
                            мультсериалов.
                            И как хорошо все это с куклой-носочком. Так все чисто сделано!</p>
                        <p className="viewer-review__author">Наталья Зайцева</p>
                    </div>

                    <div className="swiper-slide viewer-review">
                        <p className="viewer-review__text">Для самой этой истории формат читки работает отличным
                            ироническим
                            отстранением</p>
                        <p className="viewer-review__author">Дина Годер</p>
                    </div>

                    <div className="swiper-slide viewer-review">
                        <p className="viewer-review__text">Мне данный формат дал возможность самой выбирать, как
                            двигается
                            персонаж, что на нем надето, какую машину он водит, и что за плакат висит в подвале церкви.
                            Это было приятно, ведь я как будто сама поучаствовала в спектакле</p>
                        <p className="viewer-review__author">Дарья Морозова</p>
                    </div>

                    <div className="swiper-slide viewer-review">
                        <p className="viewer-review__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                            enim
                            officiis quisquam saepe! Doloribus eaque eligendi impedit libero magnam, mollitia nam
                            nesciunt non
                            obcaecati, possimus quam sunt voluptates, voluptatum! Saepe.</p>
                        <p className="viewer-review__author">Ivan Ivanov</p>
                    </div>
                </div>
            </div>

        </section>
    )
};

export default ViewerReviews;