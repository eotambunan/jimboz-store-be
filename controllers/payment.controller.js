const MidtransTransaction = require("../configs/midtrans.config");
class Payment {
    async getToken(req,res) {
        try {
            const payload = req.body
            console.log(payload)
            const token = await MidtransTransaction(payload);
            res.send(token)            
        } catch (error) {
            res.send(error.message)
        }
    }
}
module.exports = Payment;
