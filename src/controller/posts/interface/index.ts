import { postsUseCase } from "../../../use-case";

const {
  addPosts,
  addCommentByPostId,
  fetchPostsByIdUserId,
  fetchPostsByUserId,
} = postsUseCase;

export interface postCreatePostsParams {
  addPosts: typeof addPosts;
}

export interface postCreateCommentByPostIdParams {
  addCommentByPostId: typeof addCommentByPostId;
}

export interface getAllPostsByUserIdParams {
  fetchPostsByUserId: typeof fetchPostsByUserId;
}

export interface getPostsByIdUserIdParams {
  fetchPostsByIdUserId: typeof fetchPostsByIdUserId;
}
