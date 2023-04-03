import { todoUseCase } from "../../../use-case";

const {
  addTodoLists,
  fetchTodoListByIdUserId,
  fetchTodoListByUserId,
  removeTodoListById,
  reviseCompleteFlagByTodoId,
  reviseTodoListById,
} = todoUseCase;

export interface postTodoListParams {
  addTodoLists: typeof addTodoLists;
}

export interface getAllTodoListByUserIdParams {
  fetchTodoListByUserId: typeof fetchTodoListByUserId;
}

export interface getTodoListByIdUserIdParams {
  fetchTodoListByIdUserId: typeof fetchTodoListByIdUserId;
}

export interface deleteTodoListByIdParams {
  removeTodoListById: typeof removeTodoListById;
}

export interface patchTodoListByIdCompleteParams {
  reviseCompleteFlagByTodoId: typeof reviseCompleteFlagByTodoId;
}

export interface putTodoListByIdParams {
  reviseTodoListById: typeof reviseTodoListById;
}
