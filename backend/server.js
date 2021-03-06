import express from "express"
import path from 'path'
import config from './config'
import mongoose from 'mongoose'
import userRoute from './routes/userRoute'
import productRoute from './routes/productRoute'
import orderRoute from './routes/orderRoute'
import uploadRoute from './routes/uploadRoute'


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
app.use('/api/uploads', uploadRoute)


app.get('/api/config/paypal', (req, res) => {
    res.send(config.PAYPAL_CLIENT_ID);
});

//serve files from uplaod folder
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/../frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    });
}

app.listen(config.PORT, () => {
    console.log('Server started at http://localhost:5000');
});