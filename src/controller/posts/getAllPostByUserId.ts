import { request } from "express";
import { errorHandler } from "../utils";
import { getAllPostsByUserIdParams } from "./interface";

const makeGetAllPostsByUserId = ({
  fetchPostsByUserId,
}: getAllPostsByUserIdParams) => {
  return async (httpRequest: typeof request) => {
    try {
      const {
        params: { user_id },
      } = httpRequest;

      const data = await fetchPostsByUserId({ userId: parseInt(user_id) });

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: data,
      };
    } catch (e) {
      if (e instanceof Error) return errorHandler(e);
    }
  };
};

export default makeGetAllPostsByUserId;
