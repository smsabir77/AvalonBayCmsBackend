"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAppConfigFromStrapi = fetchAppConfigFromStrapi;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../config/env");
const client = axios_1.default.create({
    baseURL: env_1.env.strapiUrl,
    headers: {
        Authorization: `Bearer ${env_1.env.strapiToken}`,
    },
});
async function fetchAppConfigFromStrapi() {
    const res = await client.get("/api/app-configs", {
        params: {
            populate: "logo",
            pagination: { pageSize: 1 },
            sort: "createdAt:asc",
        },
    });
    console.log("RAW STRAPI DATA:", res.data.data);
    if (!res.data?.data?.length)
        return null;
    const item = res.data.data[0];
    let logo = undefined;
    if (item.logo?.length) {
        console.log("res.data.data[0];", res.data.data[0]);
        logo = `${env_1.env.strapiUrl}${item.logo[0].url}`;
    }
    return {
        appName: item.appName,
        welcomeText: item.welcomeText,
        bannerText: item.bannerText,
        primaryColor: item.primaryColor,
        maintenanceMode: item.maintenanceMode,
        features: item.features,
        logoUrl: logo,
    };
}
