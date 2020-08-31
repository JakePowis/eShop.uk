import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';

export default function PaypalButton(props) {

    const [SdkReady, setSdkReady] = useState(false)


    //set up script for SDK once id back from server
    const addPayPalSdk = async () => {
        const result = await axios.get("/api/config/paypal");
        const clientID = result.data;
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.paypal.com/sdk/js?client-id=' + clientID;
        script.async = true;
        script.onload = () => {

            setSdkReady(true);

            console.log("sdk function paypal", script, "sdk ready: ", SdkReady)
        }
        document.body.appendChild(script);
    }

    //TODO: create order code goes into paypal button, to give paypal the details of order (price, currency etc).
    const createOrder = (data, actions) => {

        console.log("running create to send to paypal")
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: props.amount
                    }
                }
            ]

        });

    }

    //TODO: on approve, take detials and run this.
    const onApprove = (data, actions) => actions.order
        .capture()
        .then(details => {
            console.log("from paypal: ", details)
            //run update redux/DB function
            props.onSuccess(data, details)
        })
        .catch(err => console.log(err));




    //on load, set up SDK
    useEffect(() => {

        console.log("run paypal use effect 1")
        if (!window.paypal) {
            console.log("run paypal use effect 2")
            addPayPalSdk();
        }

    }, [])

    //show loaidng while SDK setting up
    if (!SdkReady) {
        return <div>Loading Paypal SDK...</div>

    }
    //TODO: look into this code for button and functions that feed in
    const Button = window.paypal.Buttons.driver('react', { React, ReactDOM });

    return <Button {...props} createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)} />

}
