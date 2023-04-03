import { connectionParams } from "../../interface";
import makeInsertCommentByPostId from "./insert-comment-by-post-id";
import makeInsertPosts from "./insert-posts";
import makeRetrievePostsByIdUserId from "./retrieve-by-post-id-and-user-id";
import makeRetrievePostsByUserId from "./retrieve-post-by-user-id";

const makePostsAccess = ({ socialMediaDb }: connectionParams) => {
  const insertPosts = makeInsertPosts({ socialMediaDb });
  const retrievePostsByUserId = makeRetrievePostsByUserId({ socialMediaDb });
  const retrievePostsByIdUserId = makeRetrievePostsByIdUserId({
    socialMediaDb,
  });
  const insertCommentByPostId = makeInsertCommentByPostId({ socialMediaDb });

  return Object.freeze({
    insertPosts,
    retrievePostsByUserId,
    retrievePostsByIdUserId,
    insertCommentByPostId,
  });
};

export default makePostsAccess;
