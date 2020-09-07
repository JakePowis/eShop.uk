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
                    <div className="welcomeContent">
                        <div className="welcomeText">  enjoy the best books at the cheapest prices<div>only at bookStore</div>
                            <Link to="/shop"><div className="welcomeLink">browse all books</div></Link>
                        </div>
                        <div> <img style={{ width: "400px", height: "220px" }} src={bookImage} alt="books" /></div>
                    </div>
                </div>
                <div className="productRecs">
                    <div className="welcomeTitle">Todays Deals
                    <Link to="product/5f4ff612da76f40004ddad18"><img className="recImg" src="https://eshop-jp.s3.eu-west-2.amazonaws.com/loved.jpg" alt="deal" />
                        </Link></div>
                    <div className="welcomeTitle">Best Seller
                    <Link to="product/5f4ff5bada76f40004ddad17"> <img className="recImg" src="https://eshop-jp.s3.eu-west-2.amazonaws.com/fungi.jpg" alt="best" /> </Link></div>
                    <div className="welcomeTitle">New this week
                    <Link to="product/5f4ff56bda76f40004ddad16"><img className="recImg" src="https://eshop-jp.s3.eu-west-2.amazonaws.com/sane.jpg" alt="new" /></Link></div>
                </div>
                <div className="welcomeCat">
                    <div className="catTitle">Top Categories</div>
                    <div className="cats">
                        <Link to="/shop"> <div className="catLink"> All </div></Link>
                        <Link to="/category/fantasy"><div className="catLink">Fantasy</div></Link>
                        <Link to="/category/crime"><div className="catLink">Crime</div></Link>
                        <Link to="/category/romance"><div className="catLink">Romance</div></Link>
                        <Link to="/category/nonfiction"><div className="catLink">Non-fiction</div></Link>
                    </div>

                </div>
            </div>
        </div >
    )
}
