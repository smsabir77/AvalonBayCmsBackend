import { fetchAppConfigFromStrapi } from "./strapi.service";

export async function getAppConfig() {
  return fetchAppConfigFromStrapi();
}
