import express from 'express';
import Order from '../models/orderModel';
import { getToken } from '../util';
import { isAuth, isAdmin } from '../util'


const router = express.Router();

//GET ALL
router.get("/", isAuth, async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
})


//GET BY ID
router.get('/:id', isAuth, async (req, res) => {
    console.log("GET ORDER bY ID", req.body)
    const order = await Order.findOne({ _id: req.params.id });
    if (order) {
        res.send(order);
    } else {
        res.status(404).send({ message: 'Order Not Found.' });
    }
});

//Post New Order
router.post("/", isAuth, async (req, res) => {
    console.log("post new order route hit", req.body)
    const newOrder = new Order({
        orderItems: req.body.orderItems,
        user: req.user._id,
        shipping: req.body.shipping,
        payment: req.body.payment,
        itemsPrice: req.body.itemsPrice,
        taxPrice: req.body.taxPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
    });
    const newOrderCreated = await newOrder.save();
    res.status(201).send({ message: "New Order Created", data: newOrderCreated });
});

export default router