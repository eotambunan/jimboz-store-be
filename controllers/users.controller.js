const usersModel = require("../models/users.model");
const {createToken} = require("../middlewares/jwt.middleware")

class Users {
    async login(req, res) {
        try {
            const payload = req.body;
            const data = await usersModel.findOne(payload);
            if (!data) {
                throw Error("user not found");
            } else {
                const token = createToken(data)
                res.status(200).json({
                    message: "ok",
                    data,
                    token
                });
            }
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async addUser(req, res) {
        try {
            const payload = req.body;
            const findUser = await usersModel.findOne({ email: payload.email });
            if (findUser) throw new Error("Email sudah terdaftar");
            else {
                const data = await usersModel.create(payload);
                res.status(200).json({
                    message: "ok",
                    response: data,
                });
            }
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
}

module.exports = Users;
