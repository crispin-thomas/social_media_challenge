import { logger } from "../../logger";

const errorHandler = (e: Error) => {
  logger.error(e);
  return {
    headers: {
      "Content-Type": "application/json",
    },
    statusCode: 400,
    body: {
      error: e.message,
    },
  };
};

export default errorHandler;
