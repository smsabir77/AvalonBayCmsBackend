export interface AppConfig {
  appName: string;
  welcomeText: string;
  bannerText: string;
  primaryColor: string;
  maintenanceMode: boolean;
  features: Record<string, boolean>;
  logoUrl?: string;
}
