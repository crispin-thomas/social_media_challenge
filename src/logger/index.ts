import morganMiddleware from "./morgan";
import winstonLogger from "./winston";

const logger = winstonLogger;

export { morganMiddleware, logger };
