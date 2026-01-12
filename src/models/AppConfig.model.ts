import { Schema, model } from "mongoose";

const AppConfigSchema = new Schema(
  {
    communityCode: { type: String, unique: true },
    data: { type: Object },
    lastSyncedAt: { type: Date },
  },
  { timestamps: true }
);

export const AppConfigModel = model("AppConfig", AppConfigSchema);
