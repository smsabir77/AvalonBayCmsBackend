"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAppToken = requireAppToken;
const env_1 = require("../config/env");
function requireAppToken(req, res, next) {
    const token = req.headers["x-app-token"];
    if (!token || token !== env_1.env.appConfigApiToken) {
        return res.status(401).json({
            message: "Unauthorized: Invalid or missing app token",
        });
    }
    next();
}
