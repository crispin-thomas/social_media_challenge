import { todoUseCase } from "../../use-case";
import makeDeleteTodoListById from "./deleteTodoListById";
import makeGetAllTodoListByUserId from "./getAllListsByUserId";
import makeGetTodoListByIdUserId from "./getListTodoByIdAndUserId";
import makePatchTodoListByIdComplete from "./patchCompleteFlagTodoListById";
import makePostTodoList from "./postCreateTodoList";
import makePutTodoListById from "./putTodoListById";

const {
  addTodoLists,
  fetchTodoListByIdUserId,
  fetchTodoListByUserId,
  removeTodoListById,
  reviseCompleteFlagByTodoId,
  reviseTodoListById,
} = todoUseCase;

const postTodoList = makePostTodoList({ addTodoLists });

const deleteTodoListById = makeDeleteTodoListById({ removeTodoListById });

const getAllTodoListByUserId = makeGetAllTodoListByUserId({
  fetchTodoListByUserId,
});

const getTodoListByIdUserId = makeGetTodoListByIdUserId({
  fetchTodoListByIdUserId,
});

const patchTodoListByIdComplete = makePatchTodoListByIdComplete({
  reviseCompleteFlagByTodoId,
});

const putTodoListById = makePutTodoListById({ reviseTodoListById });

const todoController = Object.freeze({
  postTodoList,
  deleteTodoListById,
  getTodoListByIdUserId,
  patchTodoListByIdComplete,
  getAllTodoListByUserId,
  putTodoListById,
});

export default todoController;
