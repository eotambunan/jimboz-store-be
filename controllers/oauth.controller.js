const { google } = require("googleapis");
const { authorizationUrl, oauth2Client } = require("../configs/oauth.config");
const usersModel = require("../models/users.model");
const { createToken } = require("../middlewares/jwt.middleware");

class Oauth {
    oauthLogin(req, res) {
        res.redirect(authorizationUrl);
    }
    
    async oauthCallback(req, res) {
        const { code } = req.query;
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        const oauth2 = google.oauth2({
            auth: oauth2Client,
            version: "v2",
        });

        const { data } = await oauth2.userinfo.get();
        console.log(data)
        if (!data.email || !data.name) {
            return res.json({
                data: data,
            });
        }

        let user = await usersModel.findOne({ email: data.email });
            if (!user) {
            const response = await usersModel.create({
                name: data.name,
                email: data.email,
            });
            const token = createToken(response);
            res.redirect(`http://localhost:3001/login?user=${token}`)
        }else {
            const token = createToken(user);
            res.redirect(`http://localhost:3001/login?user=${token}`)
        }
    }
}

module.exports = Oauth;
