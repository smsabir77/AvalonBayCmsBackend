import axios from "axios";
import { env } from "../config/env";
import { AppConfig } from "../types/app-config.type";

const client = axios.create({
  baseURL: env.strapiUrl,
  headers: {
    Authorization: `Bearer ${env.strapiToken}`,
  },
});

export async function fetchAppConfigFromStrapi(): Promise<AppConfig | null> {
  const res = await client.get("/api/app-configs", {
    params: {
      populate: "logo",
      pagination: { pageSize: 1 },
      sort: "createdAt:asc",
    },
  });

  console.log("RAW STRAPI DATA:", res.data.data);

  if (!res.data?.data?.length) return null;


  const item = res.data.data[0];

let logo: string | undefined = undefined;

if (item.logo?.length) {
   const url = item.logo[0].url;

  logo = url.startsWith("http")
    ? url
    : `${process.env.STRAPI_URL}${url}`;
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
