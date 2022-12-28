import "./OfficialReviews.scss";
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

Swiper.use([Navigation, Pagination]);
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import newYorkLogo from "../../images/New-York-Times.png";
import sobakaLogo from "../../images/sobaka-logo.png";

const swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    grabCursor: true,
    loop: true,
    slideToClickedSlide: true,
    slidesPerView: 1.5,
    watchOverflow: true,
    spaceBetween: 30,
    centeredSlides: true,
    effect: 'slide',
    hashNavigation: {
        watchState: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".swiper-container",
    }
})

function OfficialReviews() {
    return (
        <section className="official-reviews">
            <h2 className="official-reviews__title">Рецензии</h2>
            <div className="official-reviews__container swiper-container">
                <div className="official-reviews__swiper-pagination swiper-pagination"></div>
                <div className="official-reviews__button-prev swiper-button-prev"></div>
                <div className="official-reviews__button-next swiper-button-next"></div>

                <div className="official-reviews__wrapper swiper-wrapper">
                    <div data-hash="slide-1" className="official-review swiper-slide">
                        <img className="official-review__logo" alt="лого The New York Times" src={newYorkLogo}/>
                        <p className="official-review__text">«Действие пьесы «Длань Господня» разворачивается в подвале
                            провинциальной церкви в Техасе, где мать главного героя с группой добровольцев готовит
                            кукольное
                            представление.
                            Ей отчаянно нужна эта работа, её муж недавно умер, оставив её с сыном-подростком в
                            эмоциональной
                            и
                            финансовой яме. И вот жуткая тварь захватывает контроль над левой рукой её беспокойного
                            Джейсона
                            и
                            принимается терроризировать
                            его и всех вокруг. По мере накала страстей окружающие начинают подозревать, что рука
                            одержима
                            самим
                            дьяволом, и пастор Грег предлагает прибегнуть к экзорцизму. Однако «Длань Господня» — это не
                            ужастик, по крайней мере, природа
                            зла тут вовсе не сверхъестественная. Чёрная комедия Аскинса о разделённой надвое душе
                            человека
                            ненавязчиво обнажает глубинные импульсы — сексуальные, саморазрушительные, агрессивные —
                            которые
                            притаились в каждом из нас».</p>
                        <button className="official-review__button" href="#">Читать полностью</button>
                    </div>

                    <div data-hash="slide-2" className="official-review swiper-slide">
                        <img className="official-review__logo" alt="лого Собака" src={sobakaLogo}/>
                        <p className="official-review__text">«Действие пьесы «Длань Господня» разворачивается в подвале
                            провинциальной церкви в Техасе, где мать главного героя с группой добровольцев готовит
                            кукольное
                            представление.
                            Ей отчаянно нужна эта работа, её муж недавно умер, оставив её с сыном-подростком
                            в эмоциональной и финансовой яме. И вот жуткая тварь захватывает контроль над левой рукой её
                            беспокойного Джейсона и принимается терроризировать его и всех вокруг. </p>
                        <button className="official-review__button" href="#">Читать полностью</button>
                    </div>

                    <div data-hash="slide-3" className="official-review swiper-slide">
                        <img className="official-review__logo" alt="лого" src={newYorkLogo}/>
                        <p className="official-review__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci
                            deleniti
                            doloremque dolorum ea esse fuga ipsum laboriosam magnam maiores maxime nostrum numquam
                            officiis
                            omnis, possimus quia reiciendis reprehenderit ullam, veniam.</p>
                        <button className="official-review__button" href="#">Читать полностью</button>
                    </div>

                    <div data-hash="slide-4" className="official-review swiper-slide">
                        <img className="official-review__logo" alt="лого" src={sobakaLogo}/>
                        <p className="official-review__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus
                            asperiores corporis facilis fugiat ipsum iusto, modi molestias nostrum odit placeat
                            provident
                            quasi
                            rem voluptates? At iste minima officiis provident rerum.</p>
                        <button className="official-review__button" href="#">Читать полностью</button>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default OfficialReviews;