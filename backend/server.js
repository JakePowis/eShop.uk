import express from "express"
import config from './config'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoute from './routes/userRoute'
import productRoute from './routes/productRoute'
import orderRoute from './routes/orderRoute'

dotenv.config();

const mongodbUrl = config.MONGODB_URL

mongoose
    .connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch((error) => console.log(error));

const app = express();

//middleware
app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);



app.listen(5000, () => console.log("Server started at http://localhost:5000"))