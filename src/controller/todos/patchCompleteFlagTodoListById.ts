import { request } from "express";
import { errorHandler } from "../utils";
import { patchTodoListByIdCompleteParams } from "./interface";

const makePatchTodoListByIdComplete = ({
  reviseCompleteFlagByTodoId,
}: patchTodoListByIdCompleteParams) => {
  return async (httpRequest: typeof request) => {
    try {
      const {
        params: { todo_id },
      } = httpRequest;

      const data = await reviseCompleteFlagByTodoId({
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

export default makePatchTodoListByIdComplete;
