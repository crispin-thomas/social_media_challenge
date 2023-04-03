import { todoListByUserIdParams } from "../../../interface/todos";
import { logger } from "../../../logger";
import { connectionParams } from "../../interface";

const makeRetrieveTodoListByUserId = ({ socialMediaDb }: connectionParams) => {
  return async ({ userId }: todoListByUserIdParams) => {
    const db = await socialMediaDb();
    const collection = db.collection("todos");

    const todoListByUserIdCollectionPromise = collection.find(
      { userId: userId },
      { projection: { _id: 0 } }
    );

    const todos: any[] = [];

    await Promise.all([todoListByUserIdCollectionPromise])
      .then(async ([resolvedTodoListByUserIdCollection]) => {
        const resolvedTodoListByUserIdPromise =
          resolvedTodoListByUserIdCollection.toArray();
        await Promise.all([resolvedTodoListByUserIdPromise])
          .then(([resolvedTodoListByUserId]) => {
            todos.push(...resolvedTodoListByUserId);
          })
          .catch((error) => logger.error(error));
      })
      .catch((error) => logger.error(error));

    return todos;
  };
};

export default makeRetrieveTodoListByUserId;
