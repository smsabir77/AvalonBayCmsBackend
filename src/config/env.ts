import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: process.env.PORT || 4000,
  mongoUri: process.env.MONGO_URI!,
  strapiUrl: process.env.STRAPI_URL!,
  strapiToken: process.env.STRAPI_TOKEN!,
  appConfigApiToken : process.env.APP_CONFIG_API_TOKEN
};
