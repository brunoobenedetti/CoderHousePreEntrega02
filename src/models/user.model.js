import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: { type: String, unique: true },
    age: Number,
    password: String,
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
    rol: { type: String, default: "user" },
    provider: String,

}, { timestamps: true });

export default mongoose.model('User', userSchema);
