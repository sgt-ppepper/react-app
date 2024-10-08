import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header data-testid="header">
            <nav>
                <ul>
                    <li>Розклад</li>
                    <li><Link to="/films">Фільми</Link></li>
                    <li><Link to="/tickets">Купити квитки</Link></li>
                    <li>Новини</li>
                    <li>Контакти</li>
                    <li><Link to="/login">Увійти</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;