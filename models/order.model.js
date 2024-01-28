const mongoose = require("mongoose");
const { Schema } = mongoose;

const productOnOrderSchema = new Schema({
    item: { type: Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
});

const OrderSchema = new Schema(
    {
        user_id: [{ type: Schema.Types.ObjectId, ref: "users" }],
        products: [productOnOrderSchema],
        status: String,
        totalPrice: Number,
    },
    { timestamps: { createdAt: "created_at" } }
);

const Order = mongoose.model("order", OrderSchema);
module.exports = Order;
