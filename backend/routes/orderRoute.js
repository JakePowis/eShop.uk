import express from 'express';
import Order from '../models/orderModel';
import { isAuth, isAdmin } from '../util'


const router = express.Router();




//GET ALL
router.get("/", isAuth, async (req, res) => {
    const orders = await Order.find({}).populate('user');
    console.log("ORDERS WITH POPULATE USRS", orders)
    res.send(orders);
});

//GET my order
router.get("/mine", isAuth, async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
});


// DELETE by ID
router.delete("/:id", isAuth, isAdmin, async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id });
    if (order) {
        const deletedOrder = await order.remove();
        res.send(deletedOrder);
    } else {
        res.status(404).send("Order Not Found.")
    }
});


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




//Update that order is paid
router.put("/:id/pay", isAuth, async (req, res) => {
    console.log("update order to paid route hit")
    const order = await Order.findById(req.params.id);
    if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.payment = {
            paymentMethod: 'paypal',
            paymentResult: {

                //FIXME: thse details not being save, different object layout - fix
                payerID: req.body.payerID,
                orderID: req.body.orderID,
                paymentID: req.body.paymentID
            }
        }
        const updatedOrder = await order.save();
        res.send({ message: 'Order Paid.', order: updatedOrder });
    } else {
        res.status(404).send({ message: 'Order not found.' })
    }
});

export default router