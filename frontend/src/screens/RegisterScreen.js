import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

export default function SignInScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;

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
        dispatch(register(name, email, password));
    }

    return (

        <form onSubmit={submitHandler} className="form">
            <ul className="form-container">
                <li>
                    <h2>Register</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}>
                    </input>
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
                    <label htmlFor="rePassword">Re-enter Password</label>
                    <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Register</button>
                </li>
                <li>
                    Already have an acount?
          </li>
                <li>
                    <Link to="/signin" className="button secondary text-center" >Log in</Link>
                </li>
            </ul>
        </form>

    )
}
