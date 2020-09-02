import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

export default function SignInScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;

    const dispatch = useDispatch();

    //arrive at scrren with "=" to where you wanted to go, you get redicted there is you hit this screen signed in,
    //else when you sign in you get sent there
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    //checks if signed in, if so redirect to where you were going
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
        return () => {
            //
        };
    }, [userInfo]);


    //logs you in, changes state to give userInfo
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return (

        <form onSubmit={submitHandler} className="form">
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Signin</button>
                </li>
                <li>
                    New to bookStore.co.uk?
          </li>
                <li>
                    <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" >Create your bookStore.co.uk account</Link>
                </li>
            </ul>
        </form>

    )
}
