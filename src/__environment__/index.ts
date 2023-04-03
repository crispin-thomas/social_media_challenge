import { config } from "dotenv";
config();

const {
  HOST,
  PORT,
  SOCIAL_MEDIA_DB_URL = "",
  SOCIAL_MEDIA_DB_NAME = "",
} = process.env;

export { HOST, PORT, SOCIAL_MEDIA_DB_URL, SOCIAL_MEDIA_DB_NAME };
