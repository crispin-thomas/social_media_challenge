import { createTodoListsParams } from "../../../interface/todos";
import { logger } from "../../../logger";
import { connectionParams } from "../../interface";

const makeInsertTodoLists = ({ socialMediaDb }: connectionParams) => {
  return async ({ todos }: createTodoListsParams) => {
    const dict = { message: "" };
    const db = await socialMediaDb();
    const collection = db.collection("todos");
    if (!todos) return (dict["message"] = "Insert Unsuccessful");

    const todoListsPromise = collection.insertMany(todos);

    await Promise.all([todoListsPromise])
      .then(([resolvedTodoLists]) => {
        const resolvedTodoListsData = resolvedTodoLists.acknowledged;
        if (resolvedTodoListsData) {
          return (dict["message"] = "Insert Successful");
        }
      })
      .catch((error) => logger.error(error));

    return dict;
  };
};

export default makeInsertTodoLists;
