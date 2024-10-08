import React from "react";
import poet from '../images/poets.jpg'
import forest from '../images/forest.jpg'
import blade from '../images/blade.jpg'


function Films() {

    return (
        <div className="films-main">
            
            <h1>Зараз на екранах кінотеатру</h1>
            <div className="films-container">
                <div className="film">
                    <img src={poet} alt="Спілка мертвих поетів" />
                        <h2>Спілка мертвих поетів</h2>
                        <p>Опис фільму 1.</p>
                        <a href="/tickets">Купити квиток</a>
                </div>
                <div className="film">
                    <img src={forest} alt="Форест Гамп" />
                        <h2>Форест Гамп</h2>
                        <p>Опис фільму 2.</p>
                        <a href="/tickets">Купити квиток</a>
                </div>
                <div className="film">
                    <img src={blade} alt="Той, що біжить по лезу" />
                        <h2>Той, що біжить по лезу</h2>
                        <p>Опис фільму 2.</p>
                        <a href="/tickets">Купити квиток</a>
                </div>

            </div>
            <h1>Скоро на екранах</h1>
            <div className="films-container">
                <div className="film">
                    <img src={poet} alt="Спілка мертвих поетів" />
                        <h2>Спілка мертвих поетів</h2>
                        <p>Опис фільму 1.</p>

                </div>
                <div className="film">
                    <img src={forest} alt="Форест Гамп" />
                        <h2>Форест Гамп</h2>
                        <p>Опис фільму 2.</p>

                </div>
                <div className="film">
                    <img src={blade} alt="Той, що біжить по лезу" />
                        <h2>Той, що біжить по лезу</h2>
                        <p>Опис фільму 2.</p>

                </div>

            </div>
        </div>
    )
}

export default Films;