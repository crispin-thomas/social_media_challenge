import { request } from "express";
import { errorHandler } from "../utils";
import { postCreateCommentByPostIdParams } from "./interface";

const makePostCreateCommentByPostId = ({
  addCommentByPostId,
}: postCreateCommentByPostIdParams) => {
  return async (httpRequest: typeof request) => {
    try {
      const {
        params: { post_id },
        body: comment,
      } = httpRequest;

      const data = await addCommentByPostId({
        postId: parseInt(post_id),
        comment,
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

export default makePostCreateCommentByPostId;
