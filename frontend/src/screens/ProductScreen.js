import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {
    console.log("TEST LOAD")
    let { _id } = useParams();

    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails)
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("id is ", _id)
        dispatch(detailsProduct(_id))
        return () => {

        }
    }, [])

    const handleAddToCart = () => {
        props.history.push("/cart/" + _id + "?qty=" + qty)
    }

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
                                    {product.rating} Stars ({product.numReviews}) reviews)
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
                                    Status:{' '}
                                    {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                                </li>
                                <li>
                                    <b>{product.price}</b>
                                </li>
                                <li>
                                    Qty: <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                        {[...Array(product.countInStock).keys()].map(x =>
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>)}
                                    </select>
                                </li>
                                <li>
                                    {product.countInStock > 0 &&
                                        <button onClick={handleAddToCart} className="button primary">Add to Cart</button>
                                    }
                                </li>
                            </ul>

                        </div>


                    </div>
            }
        </div>
    )
}



