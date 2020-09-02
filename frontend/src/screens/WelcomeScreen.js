import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import bookImage from '../images/book2.png'

export default function WelcomeScreen(props) {

    useEffect(() => {
        props.setShopScreen(false)

    }, [])

    return (
        <div className="greyBackground">
            <div class="welcomeScreen">

                <div className="welcomeHeader">
                    <div>  enjoy the best books at the cheapest prices<div>only at bookStore</div></div>
                    <div> <img scr={require('../images/book2.png')} alt="books" /></div>

                </div>
                <div className="productRecs">
                    <div className="welcomeTitle">Todays Deals</div>
                    <div className="welcomeTitle">Best Seller</div>
                    <div className="welcomeTitle">New this week</div>
                </div>
                <div className="welcomeCat">
                    <div className="welcomeTitle">Top Categories</div>
                    <div className="cats">
                        <Link to="/shop"> <div className="catLink"> All </div></Link>
                        <Link to="/category/fantasy"><div className="catLink">Fantasy</div></Link>
                        <Link to="/category/crime"><div className="catLink">Crime</div></Link>
                        <Link to="/category/romance"><div className="catLink">Romance</div></Link>
                        <Link to="/category/nonfiction"><div className="catLink">Non-fiction</div></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
