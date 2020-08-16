import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String, required: true, unique: true, index: true, dropDups: true,
    },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
});

//db name: Users & db schema: userSchema being added to model so when its created
//it goes to mongodb URL and creates db there.

const userModel = mongoose.model('User', userSchema);

export default userModel;