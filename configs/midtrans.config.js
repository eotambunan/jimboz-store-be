const midtransClient = require("midtrans-client");
// Create Snap API instance
let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
});

const MidtransTransaction = async (payload) => {
    const parameter = {
        transaction_details: {
            order_id: payload.orderId,
            gross_amount: payload.price,
        },
    };
    try {
        const transaction = await snap.createTransaction(parameter)
        const transactionToken = transaction.token;
        return transactionToken;
    } catch (error) {
        console.error("Error creating transaction:", error);
    }


};

module.exports = MidtransTransaction
