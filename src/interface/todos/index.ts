export interface createTodoListsParams {
  todos:
    | [{ id: number; title: string; completed: boolean; userId: number }]
    | []
    | undefined;
}

export interface todoListByUserIdParams {
  userId: number;
}

export interface todoListByIdUserIdParams {
  userId: number;
  todoId: number;
}

export interface todoListByIdParams {
  todoId: number;
}

export interface completeFlagByTodoIdParams {
  todoId: number;
}

export interface updateTodoListByIdParams {
  todoId: number;
  todos: { title: string; completed: boolean } | undefined;
}
