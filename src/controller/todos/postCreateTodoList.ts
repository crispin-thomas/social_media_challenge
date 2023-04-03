import { request } from "express";
import { errorHandler } from "../utils";
import { postTodoListParams } from "./interface";

const makePostTodoList = ({ addTodoLists }: postTodoListParams) => {
  return async (httpRequest: typeof request) => {
    try {
      const { body: todos } = httpRequest;

      const data = await addTodoLists({ todos });

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

export default makePostTodoList;
