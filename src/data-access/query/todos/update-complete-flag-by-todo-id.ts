import { completeFlagByTodoIdParams } from "../../../interface/todos";
import { logger } from "../../../logger";
import { connectionParams } from "../../interface";

const makeUpdateCompleteFlagByTodoId = ({
  socialMediaDb,
}: connectionParams) => {
  return async ({ todoId }: completeFlagByTodoIdParams) => {
    const db = await socialMediaDb();
    const collection = db.collection("todos");

    const updateByTodoIdPromise = collection.findOneAndUpdate(
      { id: todoId },
      { $set: { completed: true } },
      { returnDocument: "after", projection: { _id: 0 } }
    );

    const todos: any = {};

    await Promise.all([updateByTodoIdPromise])
      .then(([resolvedUpdateByTodoId]) => {
        const resolvedByTodoId = resolvedUpdateByTodoId.value;
        if (!resolvedByTodoId) return todos;

        Object.assign(todos, resolvedByTodoId);
      })
      .catch((error) => logger.error(error));

    return todos;
  };
};

export default makeUpdateCompleteFlagByTodoId;
