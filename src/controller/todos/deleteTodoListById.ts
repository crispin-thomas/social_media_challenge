import { request } from "express";
import { errorHandler } from "../utils";
import { deleteTodoListByIdParams } from "./interface";

const makeDeleteTodoListById = ({
  removeTodoListById,
}: deleteTodoListByIdParams) => {
  return async (httpRequest: typeof request) => {
    try {
      const {
        params: { todo_id },
      } = httpRequest;

      const data = await removeTodoListById({ todoId: parseInt(todo_id) });

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

export default makeDeleteTodoListById;
