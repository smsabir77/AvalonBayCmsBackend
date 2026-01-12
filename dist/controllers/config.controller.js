"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = getConfig;
const config_service_1 = require("../services/config.service");
async function getConfig(req, res) {
    const config = await (0, config_service_1.getAppConfig)();
    if (!config) {
        return res.status(404).json({ message: "App config not found" });
    }
    res.json({ message: "Starpi data Fetch Successfully ", status: true, data: config });
}
