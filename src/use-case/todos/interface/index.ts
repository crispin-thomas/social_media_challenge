import { todoListsAccess } from "../../../data-access";

const {
  insertTodoLists,
  deleteTodoListById,
  retrieveTodoListByIdUserId,
  retrieveTodoListByUserId,
  updateCompleteFlagByTodoId,
  updateTodoListById,
} = todoListsAccess;

export interface addTodoListsParams {
  insertTodoLists: typeof insertTodoLists;
}

export interface fetchTodoListByUserIdParams {
  retrieveTodoListByUserId: typeof retrieveTodoListByUserId;
}

export interface fetchTodoListByIdUserIdParams {
  retrieveTodoListByIdUserId: typeof retrieveTodoListByIdUserId;
}

export interface removeTodoListByIdParams {
  deleteTodoListById: typeof deleteTodoListById;
}

export interface reviseCompleteFlagByTodoIdParams {
  updateCompleteFlagByTodoId: typeof updateCompleteFlagByTodoId;
}

export interface reviseTodoListByIdParams {
  updateTodoListById: typeof updateTodoListById;
}
