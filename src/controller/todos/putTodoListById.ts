import { request } from "express";
import { errorHandler } from "../utils";
import { putTodoListByIdParams } from "./interface";

const makePutTodoListById = ({ reviseTodoListById }: putTodoListByIdParams) => {
  return async (httpRequest: typeof request) => {
    try {
      const {
        params: { todo_id },
        body: todos,
      } = httpRequest;

      const data = await reviseTodoListById({
        todoId: parseInt(todo_id),
        todos,
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

export default makePutTodoListById;
