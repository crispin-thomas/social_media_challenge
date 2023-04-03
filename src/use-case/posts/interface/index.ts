import { postsAccess } from "../../../data-access";

const {
  insertPosts,
  insertCommentByPostId,
  retrievePostsByIdUserId,
  retrievePostsByUserId,
} = postsAccess;

export interface addPostsParams {
  insertPosts: typeof insertPosts;
}

export interface addCommentByPostIdParams {
  insertCommentByPostId: typeof insertCommentByPostId;
}

export interface fetchPostsByIdUserIdParams {
  retrievePostsByIdUserId: typeof retrievePostsByIdUserId;
}

export interface fetchPostsByUserIdParams {
  retrievePostsByUserId: typeof retrievePostsByUserId;
}
