const express = require('express')
const oauth = express.Router()
const OauthController = require('../../controllers/oauth.controller')
const oauthController = new OauthController

oauth.get("/auth/google",oauthController.oauthLogin)
oauth.get("/auth/google/callback",oauthController.oauthCallback)

module.exports = oauth