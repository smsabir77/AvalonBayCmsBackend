"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_controller_1 = require("../controllers/config.controller");
const apiAuth_middleware_1 = require("../middlewares/apiAuth.middleware");
const router = (0, express_1.Router)();
router.get("/app-config", apiAuth_middleware_1.requireAppToken, config_controller_1.getConfig);
exports.default = router;
