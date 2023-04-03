import { todoListByIdParams } from "../../../interface/todos";
import { logger } from "../../../logger";
import { connectionParams } from "../../interface";

const makeDeleteTodoListById = ({ socialMediaDb }: connectionParams) => {
  return async ({ todoId }: todoListByIdParams) => {
    const db = await socialMediaDb();
    const collection = db.collection("todos");

    const todoListByIdPromise = collection.deleteOne({ id: todoId });

    const dict = { message: "" };

    await Promise.all([todoListByIdPromise])
      .then(([resolvedTodoListById]) => {
        const resolvedTodoListByIdData = resolvedTodoListById.acknowledged;
        if (resolvedTodoListByIdData)
          return (dict["message"] = "Delete Successful");
      })
      .catch((error) => logger.error(error));

    return dict;
  };
};

export default makeDeleteTodoListById;
