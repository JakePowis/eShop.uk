import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Rating } from '../components/Rating';


export default function HomeScreen(props) {
    console.log("HOME SCREEN HIT, props are", props, "cat is", props.category)


    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    console.log("state is :", productList)

    const [searchKeyword, setSearchKeyword] = useState("");
    const [sortOrder, setSortOrder] = useState('');
    const category = props.match.params.id ? props.match.params.id : "";


    const sortHandler = (e) => {
        setSortOrder(e.target.value);
        dispatch(listProducts(category, searchKeyword, sortOrder));
    };


    useEffect(() => {

        dispatch(listProducts(category))
        props.setShopScreen(true)

        return () => {
        }
    }, [category])

    return (
        <div className="shopPage">
            <div className="shopResults">
                <div><span ><b>{products.length}</b></span> results found
                    {category && <span> in category <span style={{ color: "orange" }}><b>"{category}"</b></span></span>}
                    {searchKeyword && <span> for <span style={{ color: "orange" }}><b>"{searchKeyword}"</b></span></span>}
                </div>
                <ul className="filter">
                    <li>
                        Sort By{' '}
                        <select name="sortOrder" onChange={sortHandler}>
                            <option value="">Name</option>
                            <option value="lowest">Lowest</option>
                            <option value="highest">Highest</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="leftSide">
            </div>

            <div className="rightSide">
                {loading ? <div>Loading...</div> :
                    error ? <div>{error}</div> :
                        products ?
                            <ul className="products">
                                {
                                    products.map(product =>
                                        <li key={product._id}>
                                            <div className="product">
                                                <div className="productPic">
                                                    <Link to={"/product/" + product._id}><img className="product-image" src={product.image} alt="product" /> </Link>
                                                </div>
                                                <div className="productDetails">
                                                    <div className="product-name">
                                                        <Link to={"/product/" + product._id}>{product.name}</Link>
                                                    </div>
                                                    <div className="product-brand">{product.brand}</div>
                                                    <div className="product-rating"><Rating
                                                        value={product.rating}
                                                        text={product.numReviews + ' reviews'}
                                                    /></div>

                                                    <div className="product-price">£{product.price}</div>


                                                </div>
                                            </div>
                                        </li>)
                                }
                            </ul>
                            : <div>nothing</div>}
            </div>
        </div>
    )
}
