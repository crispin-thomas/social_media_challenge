import { request } from "express";
import { errorHandler } from "../utils";
import { getTodoListByIdUserIdParams } from "./interface";

const makeGetTodoListByIdUserId = ({
  fetchTodoListByIdUserId,
}: getTodoListByIdUserIdParams) => {
  return async (httpRequest: typeof request) => {
    try {
      const {
        params: { user_id, todo_id },
      } = httpRequest;

      const data = await fetchTodoListByIdUserId({
        userId: parseInt(user_id),
        todoId: parseInt(todo_id),
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

export default makeGetTodoListByIdUserId;
