import { Request, Response } from "express";
import { getAppConfig } from "../services/config.service";

export async function getConfig(req: Request, res: Response) {
  const config = await getAppConfig();

  if (!config) {
    return res.status(404).json({ message: "App config not found" });
  }

  res.json({message : "Starpi data Fetch Successfully ", status : true , data : config});
}
