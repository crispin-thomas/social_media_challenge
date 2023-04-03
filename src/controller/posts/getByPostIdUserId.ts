import { request } from "express";
import { errorHandler } from "../utils";
import { getPostsByIdUserIdParams } from "./interface";

const makeGetPostsByIdUserId = ({
  fetchPostsByIdUserId,
}: getPostsByIdUserIdParams) => {
  return async (httpRequest: typeof request) => {
    try {
      const {
        params: { user_id, post_id },
      } = httpRequest;

      const data = await fetchPostsByIdUserId({
        userId: parseInt(user_id),
        postId: parseInt(post_id),
      });

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

export default makeGetPostsByIdUserId;
