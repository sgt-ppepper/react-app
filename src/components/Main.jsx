import React from 'react';

import poet from '../images/poets.jpg'
import forest from '../images/forest.jpg'
import blade from '../images/blade.jpg'

function Main() {
    return (
        <main>
            <section className="hero">
                <h1>Кінотеатр "Кактус Гандоооон"</h1>
                <p>Тут можна додати кілька речень про кінотеатр, його історію, особливості та переваги.</p>
                <a href="/tickets" className="btn">Купити квитки</a>
            </section>
            <section className="movies">
                <h2>Сьогодні в кіно</h2>
                <ul>
                    <li>
                        <a href="!#">
                            <img src={poet} alt="Назва фільму" />
                                <h3>Спілка мертвих поетів</h3>
                                <p>Інформація про фільм.</p>
                        </a>
                    </li>
                    <li>
                        <a href="!#">
                            <img src={forest} alt="Назва фільму" />
                                <h3>Форест Гамп</h3>
                                <p>Інформація про фільм.</p>
                        </a>
                    </li>
                    <li>
                        <a href="!#">
                            <img src={blade} alt="Назва фільму" />
                                <h3>Той, що біжить по лезу</h3>
                                <p>Інформація про фільм.</p>
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Main;
