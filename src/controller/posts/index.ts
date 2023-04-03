import { postsUseCase } from "../../use-case";
import makeGetAllPostsByUserId from "./getAllPostByUserId";
import makeGetPostsByIdUserId from "./getByPostIdUserId";
import makePostCreateCommentByPostId from "./postCreateCommentByPostId";
import makePostCreatePosts from "./postCreatePosts";

const {
  addPosts,
  addCommentByPostId,
  fetchPostsByIdUserId,
  fetchPostsByUserId,
} = postsUseCase;

const postCreatePosts = makePostCreatePosts({ addPosts });
const postCreateCommentByPostId = makePostCreateCommentByPostId({
  addCommentByPostId,
});
const getAllPostsByUserId = makeGetAllPostsByUserId({ fetchPostsByUserId });
const getPostsByIdUserId = makeGetPostsByIdUserId({ fetchPostsByIdUserId });

const postsController = Object.freeze({
  postCreatePosts,
  postCreateCommentByPostId,
  getAllPostsByUserId,
  getPostsByIdUserId,
});

export default postsController;
