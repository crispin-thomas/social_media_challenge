import { request } from "express";
import { errorHandler } from "../utils";
import { postCreatePostsParams } from "./interface";

const makePostCreatePosts = ({ addPosts }: postCreatePostsParams) => {
  return async (httpRequest: typeof request) => {
    try {
      const { body: posts } = httpRequest;

      const data = await addPosts({ posts });

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

export default makePostCreatePosts;
