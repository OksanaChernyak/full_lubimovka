import "./Performance.scss";
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import RandomScript from "../RandomScript/RandomScript";

function Performance() {

    return (
        <section className="performance">
            <div className="performance__wrapper performance__wrapper_credits">
                <div className="performance__wrapper_misc">
                    <p className="performance__longevity">1&nbsp;ч.&nbsp;15&nbsp;мин.</p>
                    <p className="performance__age">18+</p>
                </div>
                <ul className="performance__credits">
                    <li className="performance__credit"><p className="performance__profession">Драматург</p><p
                        className="performance__name">Роберт Аскинс</p></li>
                    <li className="performance__credit"><p className="performance__profession">Перевод</p><p
                        className="performance__name">Оксана Алёшина</p></li>
                    <li className="performance__credit"><p className="performance__profession">Адаптация текста</p><p
                        className="performance__name">Валерий Печейкин</p></li>
                    <li className="performance__credit"><p className="performance__profession">Режиссёр</p><p
                        className="performance__name">Юрий Муравицкий</p></li>
                    <li className="performance__credit"><p className="performance__profession">Актёры</p><p
                        className="performance__name">Фёдор Кокорев, Коля Ноекёльн, Ксения Чекина, Александр Пронькин,
                        Владимир Морозов, Светлана Маршанкина</p></li>
                </ul>
            </div>
            <div className="performance__wrapper performance__wrapper_main">
                <iframe className="performance__video"
                        width="100%" height="100%"
                        src="https://www.youtube.com/embed/_GvtV2bfc7Q"
                        allowFullScreen></iframe>
                <article className="performance__description">
                    <p className="performance__paragraph">Пьеса «Длань Господня» (Hand to God) — лауреат американской
                        театральной премии OBIE (Off-Broadway Theater Awards),
                        номинант ежегодно присуждаемой премии TONY (Theatre Of New York), театрального аналога «Оскара»,
                        и
                        номинант на Британскую премию Лоуренса Оливье в качестве «Лучшей Новой Комедии».
                        Она была поставлена в бродвейских театрах и в лондонском Вест-Энде.
                    </p>
                    <p className="performance__paragraph">
                        Этот спектакль – результат коллаборации фестиваля драматургии «Любимовка», который запустил
                        проект
                        по выпуску собственных спектаклей «Любимовка.Продакшн», Театра 18+ и Театра.doc.
                        Исполнители – выпускники актерской лаборатории Юрия Муравицкого Московской Школы Нового Кино.
                    </p>
                    <p className="performance__paragraph">Режиссёр спектакля Юрий Муравицкий – лауреат Национальной
                        театральной премии «Золотая маска»,
                        лауреат премий Herald Angel Award и Total Theatre Award в номинации Innovation, Experimentation
                        &
                        Playing with Form на Edinburgh Festival Fringe: «В этой пьесе меня задевает её смелость и
                        свобода.
                        И то, что она написана смешно. Мне сейчас интересны комедии. В январе я выпустил «Lё Тартюф.
                        Комедия» в театре на Таганке — тоже комедию и тоже в известном смысле антиклерикальную.
                        У меня есть стойкое ощущение что всему, что сейчас происходит в нашей стране и в мире, мы можем
                        противопоставить только смех. Иногда горький смех, иногда злой.
                        Сейчас в воздухе столько ненависти, что нам всем полезно больше смеяться. И над собой в том
                        числе.
                        «Длань Господня» — это чёрная комедия.
                        Помимо прочего, она показывает к чему приводит навязывание и насильственное насаждение религии».
                    </p>
                    <p className="performance__paragraph">Пьеса была успешно представлена в России в формате читки в
                        2016
                        году рамках лаборатории LARK+Любимовка на сцене Центра им. Мейерхольда.</p>
                </article>
                <RandomScript/>
            </div>
        </section>
    )
};
export default Performance;