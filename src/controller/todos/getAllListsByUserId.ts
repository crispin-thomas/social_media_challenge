import { request } from "express";
import { errorHandler } from "../utils";
import { getAllTodoListByUserIdParams } from "./interface";

const makeGetAllTodoListByUserId = ({
  fetchTodoListByUserId,
}: getAllTodoListByUserIdParams) => {
  return async (httpRequest: typeof request) => {
    try {
      const {
        params: { user_id },
      } = httpRequest;

      const data = await fetchTodoListByUserId({ userId: parseInt(user_id) });

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

export default makeGetAllTodoListByUserId;
