import { HOST, PORT } from "./__environment__";
import express from "express";
import cors from "cors";
import { logger, morganMiddleware } from "./logger";
import router from "./routes";

//Variables
const app = express();
const host = HOST || "http://localhost";
const port = PORT || 5500;

//Routes
app.use(cors());
app.use(express.json());
app.use(morganMiddleware);
app.use(router);

//Server Listening...
app.listen(port, () => logger.info(`${host}:${port}`));
