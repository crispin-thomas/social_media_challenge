import { postsAccess } from "../../data-access";
import makeAddCommentByPostId from "./add-comments-by-post-id";
import makeAddPosts from "./add-posts";
import makeFetchPostsByIdUserId from "./fetch-by-user-id-post-id";
import makeFetchPostsByUserId from "./fetch-posts-by-user-id";

const {
  insertPosts,
  insertCommentByPostId,
  retrievePostsByIdUserId,
  retrievePostsByUserId,
} = postsAccess;

const addPosts = makeAddPosts({ insertPosts });
const addCommentByPostId = makeAddCommentByPostId({ insertCommentByPostId });
const fetchPostsByUserId = makeFetchPostsByUserId({ retrievePostsByUserId });
const fetchPostsByIdUserId = makeFetchPostsByIdUserId({
  retrievePostsByIdUserId,
});

const postsUseCase = Object.freeze({
  addPosts,
  addCommentByPostId,
  fetchPostsByUserId,
  fetchPostsByIdUserId,
});

export default postsUseCase;
