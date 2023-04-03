import { todoListByUserIdParams } from "../../interface/todos";
import { fetchTodoListByUserIdParams } from "./interface";

const makeFetchTodoListByUserId = ({
  retrieveTodoListByUserId,
}: fetchTodoListByUserIdParams) => {
  return async ({ userId }: todoListByUserIdParams) => {
    const fetchTodoListByUserIdPromise = retrieveTodoListByUserId({ userId });

    const fetchTodoListByUserId: any[] = [];

    await Promise.all([fetchTodoListByUserIdPromise]).then(
      ([resolvedTodoListByUserId]) => {
        fetchTodoListByUserId.push(...resolvedTodoListByUserId);
      }
    );
    return fetchTodoListByUserId;
  };
};

export default makeFetchTodoListByUserId;
