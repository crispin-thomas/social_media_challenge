import { todoListsAccess } from "../../data-access";
import makeAddTodoLists from "./add-todo-lists";
import makeFetchTodoListByIdUserId from "./fetch-by-todo-id-user-id";
import makeFetchTodoListByUserId from "./fetch-todo-lists-by-user-id";
import makeRemoveTodoListById from "./remove-todo-list-by-id";
import makeReviseCompleteFlagByTodoId from "./revise-complete-flag-by-todo-id";
import makeReviseTodoListById from "./revise-todo-lists-by-id";

const {
  insertTodoLists,
  deleteTodoListById,
  retrieveTodoListByIdUserId,
  retrieveTodoListByUserId,
  updateCompleteFlagByTodoId,
  updateTodoListById,
} = todoListsAccess;

const addTodoLists = makeAddTodoLists({ insertTodoLists });
const fetchTodoListByIdUserId = makeFetchTodoListByIdUserId({
  retrieveTodoListByIdUserId,
});
const fetchTodoListByUserId = makeFetchTodoListByUserId({
  retrieveTodoListByUserId,
});
const removeTodoListById = makeRemoveTodoListById({ deleteTodoListById });
const reviseCompleteFlagByTodoId = makeReviseCompleteFlagByTodoId({
  updateCompleteFlagByTodoId,
});
const reviseTodoListById = makeReviseTodoListById({ updateTodoListById });

const todoUseCase = Object.freeze({
  addTodoLists,
  fetchTodoListByIdUserId,
  fetchTodoListByUserId,
  removeTodoListById,
  reviseCompleteFlagByTodoId,
  reviseTodoListById,
});

export default todoUseCase;
