const mongoose = require("mongoose");
const { Schema } = mongoose;


const productOnChartSchema = new Schema({
    item: { type: Schema.Types.ObjectId, ref: "Product" },
    quantity : Number
},{_id:false})

const cartSchema = new Schema({
    user_id: [{ type: Schema.Types.ObjectId, ref: "users" }],
    products: [productOnChartSchema],
});


const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
