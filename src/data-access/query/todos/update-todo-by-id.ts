import { updateTodoListByIdParams } from "../../../interface/todos";
import { logger } from "../../../logger";
import { connectionParams } from "../../interface";

const makeUpdateTodoListById = ({ socialMediaDb }: connectionParams) => {
  return async ({ todoId, todos }: updateTodoListByIdParams) => {
    const db = await socialMediaDb();
    const collection = db.collection("todos");

    const todoListByIdPromise = collection.findOneAndUpdate(
      { id: todoId },
      { $set: todos },
      { returnDocument: "after", projection: { _id: 0 } }
    );

    const todosList: any = {};

    await Promise.all([todoListByIdPromise])
      .then(([resolvedTodoListById]) => {
        const resolvedTodoListByIdData = resolvedTodoListById.value;
        if (!resolvedTodoListByIdData) return {};

        Object.assign(todosList, resolvedTodoListByIdData);
      })
      .catch((error) => logger.error(error));

    return todosList;
  };
};

export default makeUpdateTodoListById;
