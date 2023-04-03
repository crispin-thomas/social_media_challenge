import { request, response } from "express";
import { logger } from "../logger";

export default function makeExpressCallback(controller: Function) {
  return (req: typeof request, res: typeof response) => {
    const { body, query, params, ip, method, path } = req;
    const httpRequest = {
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
      },
      body,
      query,
      params,
      ip,
      method,
      path,
    };

    controller(httpRequest)
      .then((httpResponse: typeof request) => {
        const { headers, body, statusCode } = httpResponse;
        res.type("json");
        if (headers) res.set(headers);
        if (statusCode) {
          res.status(statusCode).json(body);
        }
      })
      .catch((err: any) => {
        logger.error(err);
        res.status(500).send({ error: "An unkown error occurred." });
      });
  };
}
