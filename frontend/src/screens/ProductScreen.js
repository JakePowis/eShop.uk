import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen() {
    console.log("TEST LOAD")
    let { _id } = useParams();


    const productDetails = useSelector(state => state.productDetails)
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("id is ", _id)
        dispatch(detailsProduct(_id))
        return () => {

        }
    }, [])


    return (
        <div>
            <div className="back-to-result">
                <Link to="/"> Back to result</Link>
            </div>
            {loading ? <div>Loading...</div> :
                error ? <div>{error}</div> :
                    <div className="details">
                        <div className="details-image">
                            <img src={product.image} alt="product" />
                        </div>

                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{product.name}</h4>
                                </li>
                                <li>
                                    {product.rating} Stars (product.numReviews) reviews)
                        </li>
                                <li>
                                    <b>{product.price}</b>
                                </li>
                                <li>
                                    Description:
                        <div>
                                        {product.description}
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="details-action">
                            <ul>
                                <li>
                                    Price: {product.price}
                                </li>
                                <li>
                                    Status: {product.status}
                                </li>
                                <li>
                                    <b>{product.price}</b>
                                </li>
                                <li>
                                    Qty: <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </li>
                                <li>
                                    <button className="button primary">Add to Cart</button>
                                </li>
                            </ul>

                        </div>


                    </div>
            }
        </div>
    )
}
