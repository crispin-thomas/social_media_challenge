import { todoListByIdParams } from "../../interface/todos";
import { removeTodoListByIdParams } from "./interface";

const makeRemoveTodoListById = ({
  deleteTodoListById,
}: removeTodoListByIdParams) => {
  return async ({ todoId }: todoListByIdParams) => {
    const removeTodoListByIdPromise = deleteTodoListById({ todoId });

    const removeTodoListById: { message: string } = { message: "" };

    await Promise.all([removeTodoListByIdPromise]).then(
      ([resolvedTodoListById]) => {
        Object.assign(removeTodoListById, resolvedTodoListById);
      }
    );

    return removeTodoListById;
  };
};

export default makeRemoveTodoListById;
