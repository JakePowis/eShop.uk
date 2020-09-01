import React from 'react'
import { Link } from 'react-router-dom';

export default function WelcomeScreen() {
    return (
        <div className="greyBackground">
            <div class="welcomeScreen">
                <div className="welcomeTitle">Welcome to eShop.uk</div>
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

                <div className="productRecs">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
        </div>
    )
}
