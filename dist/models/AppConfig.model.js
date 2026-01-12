"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigModel = void 0;
const mongoose_1 = require("mongoose");
const AppConfigSchema = new mongoose_1.Schema({
    communityCode: { type: String, unique: true },
    data: { type: Object },
    lastSyncedAt: { type: Date },
}, { timestamps: true });
exports.AppConfigModel = (0, mongoose_1.model)("AppConfig", AppConfigSchema);
