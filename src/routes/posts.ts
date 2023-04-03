import { postsRouteParams } from "./interface";

const makePostsRoutes = ({
  router,
  makeExpressCallback,
  postsController,
}: postsRouteParams) => {
  const {
    postCreatePosts,
    postCreateCommentByPostId,
    getAllPostsByUserId,
    getPostsByIdUserId,
  } = postsController;

  router.post("/posts", makeExpressCallback(postCreatePosts));

  router.post(
    "/posts/:post_id/comments",
    makeExpressCallback(postCreateCommentByPostId)
  );

  router.get("/users/:user_id/posts", makeExpressCallback(getAllPostsByUserId));

  router.get(
    "/users/:user_id/posts/:post_id",
    makeExpressCallback(getPostsByIdUserId)
  );
};

export default makePostsRoutes;
