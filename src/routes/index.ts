import { Router } from "express";
import makeExpressCallback from "../expressCallback";

import makeTodoListsRoutes from "./todos";
import makePostsRoutes from "./posts";

import { todoController, postsController } from "../controller";

const router = Router();

makeTodoListsRoutes({ router, makeExpressCallback, todoController });
makePostsRoutes({ router, makeExpressCallback, postsController });

export default router;
