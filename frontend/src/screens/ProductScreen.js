import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import data from '../data';

export default function ProductScreen() {
    console.log("TEST LOAD")
    let { _id } = useParams();
    const product = data.products.find(x => x._id === _id)
    return (
        <div>
            <div className="back-to-result">
                <Link to="/"> Back to result</Link>
            </div>
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

        </div>
    )
}
