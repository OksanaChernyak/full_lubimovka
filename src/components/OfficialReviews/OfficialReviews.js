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
const swiper = new Swiper('.official-reviews__container', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.official-reviews__button-next',
        prevEl: '.official-reviews__button-prev'
    },
    pagination: {
        el: '.official-reviews__swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    grabCursor: true,
    loop: true,
    slideToClickedSlide: true,
    slidesPerView: 1.5,
    watchOverflow: true,
    spaceBetween: 30,
    centeredSlides: false,
    effect: 'slide',
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".official-reviews__container",
    },

})
function OfficialReviews() {
    useEffect(()=> {
        swiper.init()
    }, [])

    return (
        <section className="official-reviews">
            <div className="official-reviews__header">
                <h2 className="official-reviews__title">Рецензии</h2>
                <div className="official-reviews__navigation-wrapper">
                    <div className="official-reviews__swiper-pagination"></div>
                    <div className="official-reviews__button-prev"></div>
                    <div className="official-reviews__button-next"></div>
                </div>

            </div>
            <div className="official-reviews__container">
                <div className="official-reviews__wrapper swiper-wrapper">
                    <div className="swiper-slide official-review ">
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

                    <div className="swiper-slide official-review">
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

                    <div className="swiper-slide official-review">
                        <img className="official-review__logo" alt="лого" src={newYorkLogo}/>
                        <p className="official-review__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci
                            deleniti
                            doloremque dolorum ea esse fuga ipsum laboriosam magnam maiores maxime nostrum numquam
                            officiis
                            omnis, possimus quia reiciendis reprehenderit ullam, veniam.</p>
                        <button className="official-review__button" href="#">Читать полностью</button>
                    </div>

                    <div className="swiper-slide official-review">
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