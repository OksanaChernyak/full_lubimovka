import "./ViewerReviews.scss";
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";


function ViewerReviews() {

    return (
        <section className="viewer-reviews">
            <h2 className="viewer-reviews__title">Отзывы зрителей</h2>
            <article className="viewer-review">
                <p className="viewer-review__text">Что-то похожее на эффект от мультфильмов типа «Сауз Парк» или про
                    коня Боджэка возникает — я думаю, и пьеса написана с этой интонацией американских взрослых
                    мультсериалов.
                    И как хорошо все это с куклой-носочком. Так все чисто сделано!</p>
                <p className="viewer-review__author">Наталья Зайцева</p>
            </article>

            <article className="viewer-review">
                <p className="viewer-review__text">Для самой этой истории формат читки работает отличным ироническим
                    отстранением</p>
                <p className="viewer-review__author">Дина Годер</p>
            </article>

            <article className="viewer-review">
                <p className="viewer-review__text">Мне данный формат дал возможность самой выбирать, как двигается
                    персонаж, что на нем надето, какую машину он водит, и что за плакат висит в подвале церкви.
                    Это было приятно, ведь я как будто сама поучаствовала в спектакле</p>
                <p className="viewer-review__author">Дарья Морозова</p>
            </article>

            <article className="viewer-review">
                <p className="viewer-review__text"></p>
                <p className="viewer-review__author"></p>
            </article>
        </section>
    )
};

export default ViewerReviews;