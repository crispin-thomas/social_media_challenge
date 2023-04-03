import { todoListByIdUserIdParams } from "../../../interface/todos";
import { logger } from "../../../logger";
import { connectionParams } from "../../interface";

const makeRetrieveTodoListByIdUserId = ({
  socialMediaDb,
}: connectionParams) => {
  return async ({ userId, todoId }: todoListByIdUserIdParams) => {
    const db = await socialMediaDb();
    const collection = db.collection("todos");

    const projection = { _id: 0 };
    const todoListByIdUserIdPromise = collection.findOne(
      {
        userId: userId,
        id: todoId,
      },
      { projection }
    );

    const todos: any = {};

    await Promise.all([todoListByIdUserIdPromise])
      .then(([resolvedTodoListByIdUserId]) => {
        if (resolvedTodoListByIdUserId) {
          Object.assign(todos, resolvedTodoListByIdUserId);
        }
      })
      .catch((error) => logger.error(error));

    return todos;
  };
};

export default makeRetrieveTodoListByIdUserId;
