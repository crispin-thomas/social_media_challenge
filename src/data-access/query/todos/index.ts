import { connectionParams } from "../../interface";
import makeDeleteTodoListById from "./delete-todo-by-id";
import makeInsertTodoLists from "./insert-todo-lists";
import makeRetrieveTodoListByIdUserId from "./retrieve-by-todo-id-user-id";
import makeRetrieveTodoListByUserId from "./retrieve-todos-by-user-id";
import makeUpdateCompleteFlagByTodoId from "./update-complete-flag-by-todo-id";
import makeUpdateTodoListById from "./update-todo-by-id";

const makeTodoListsAccess = ({ socialMediaDb }: connectionParams) => {
  const insertTodoLists = makeInsertTodoLists({ socialMediaDb });

  const deleteTodoListById = makeDeleteTodoListById({ socialMediaDb });

  const retrieveTodoListByIdUserId = makeRetrieveTodoListByIdUserId({
    socialMediaDb,
  });

  const retrieveTodoListByUserId = makeRetrieveTodoListByUserId({
    socialMediaDb,
  });

  const updateCompleteFlagByTodoId = makeUpdateCompleteFlagByTodoId({
    socialMediaDb,
  });

  const updateTodoListById = makeUpdateTodoListById({ socialMediaDb });

  return Object.freeze({
    insertTodoLists,
    deleteTodoListById,
    retrieveTodoListByIdUserId,
    retrieveTodoListByUserId,
    updateCompleteFlagByTodoId,
    updateTodoListById,
  });
};

export default makeTodoListsAccess;
