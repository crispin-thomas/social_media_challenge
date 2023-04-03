import { todoListRouteParams } from "./interface";

const makeTodoListsRoutes = ({
  router,
  makeExpressCallback,
  todoController,
}: todoListRouteParams) => {
  const {
    postTodoList,
    deleteTodoListById,
    getAllTodoListByUserId,
    getTodoListByIdUserId,
    patchTodoListByIdComplete,
    putTodoListById,
  } = todoController;

  router.post("/todos", makeExpressCallback(postTodoList));

  router.get(
    "/users/:user_id/todos",
    makeExpressCallback(getAllTodoListByUserId)
  );

  router.get(
    "/users/:user_id/todos/:todo_id",
    makeExpressCallback(getTodoListByIdUserId)
  );

  router.delete("/todos/:todo_id", makeExpressCallback(deleteTodoListById));

  router.patch(
    "/todos/:todo_id/complete",
    makeExpressCallback(patchTodoListByIdComplete)
  );

  router.put("/todos/:todo_id", makeExpressCallback(putTodoListById));
};

export default makeTodoListsRoutes;
