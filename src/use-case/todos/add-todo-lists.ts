import { createTodoListsParams } from "../../interface/todos";
import { addTodoListsParams } from "./interface";

const makeAddTodoLists = ({ insertTodoLists }: addTodoListsParams) => {
  return async ({ todos }: createTodoListsParams) => {
    const createTodoListsPromise = insertTodoLists({ todos });

    const createTodoLists: { message: string } = { message: "" };

    await Promise.all([createTodoListsPromise]).then(([resolvedTodoLists]) => {
      Object.assign(createTodoLists, resolvedTodoLists);
    });

    return createTodoLists;
  };
};

export default makeAddTodoLists;
