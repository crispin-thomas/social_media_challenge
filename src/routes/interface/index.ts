import router from "..";
import makeExpressCallback from "../../expressCallback";
import { todoController, postsController } from "../../controller";

export interface todoListRouteParams {
  router: typeof router;
  makeExpressCallback: typeof makeExpressCallback;
  todoController: typeof todoController;
}

export interface postsRouteParams {
  router: typeof router;
  makeExpressCallback: typeof makeExpressCallback;
  postsController: typeof postsController;
}
