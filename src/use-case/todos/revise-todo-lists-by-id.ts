import { updateTodoListByIdParams } from "../../interface/todos";
import { reviseTodoListByIdParams } from "./interface";

const makeUpdateTodoListById = ({
  updateTodoListById,
}: reviseTodoListByIdParams) => {
  return async ({ todoId, todos }: updateTodoListByIdParams) => {
    const updateTodoListByIdPromise = updateTodoListById({ todoId, todos });
    const todoListById: any = {};
    await Promise.all([updateTodoListByIdPromise]).then(
      ([resolvedTodoListById]) => {
        Object.assign(todoListById, resolvedTodoListById);
      }
    );
    return todoListById;
  };
};

export default makeUpdateTodoListById;
