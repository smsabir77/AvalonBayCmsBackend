"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppConfig = getAppConfig;
const strapi_service_1 = require("./strapi.service");
async function getAppConfig() {
    return (0, strapi_service_1.fetchAppConfigFromStrapi)();
}
