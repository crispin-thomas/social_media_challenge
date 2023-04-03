import { todoListByIdUserIdParams } from "../../interface/todos";
import { fetchTodoListByIdUserIdParams } from "./interface";

const makeFetchTodoListByIdUserId = ({
  retrieveTodoListByIdUserId,
}: fetchTodoListByIdUserIdParams) => {
  return async ({ userId, todoId }: todoListByIdUserIdParams) => {
    const fetchTodoListByIdUserIdPromise = retrieveTodoListByIdUserId({
      todoId,
      userId,
    });

    const fetchTodoListByIdUserId: any = {};
    await Promise.all([fetchTodoListByIdUserIdPromise]).then(
      ([resolvedTodoListByIdUserId]) => {
        Object.assign(fetchTodoListByIdUserId, resolvedTodoListByIdUserId);
      }
    );

    return fetchTodoListByIdUserId;
  };
};

export default makeFetchTodoListByIdUserId;
