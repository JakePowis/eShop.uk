import React from 'react'
import { Link } from 'react-router-dom';

export default function WelcomeScreen() {
    return (
        <div >
            <div class="welcomeScreen">
                Welcome
                <ul className="categories">
                    <li>
                        <Link to="/shop">All Items</Link>
                    </li>
                    <li>
                        <Link to="/category/lol">League of Legends</Link>
                    </li>

                    <li>
                        <Link to="/category/csgo">Counter Strike: GO</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
