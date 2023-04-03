import { createPostsParams } from "../../../interface/posts";
import { logger } from "../../../logger";
import { connectionParams } from "../../interface";

const makeInsertPosts = ({ socialMediaDb }: connectionParams) => {
  return async ({ posts }: createPostsParams) => {
    const dict = { message: "" };
    const db = await socialMediaDb();
    const collection = db.collection("posts");
    if (!posts) return (dict["message"] = "Insert Unsuccessful");

    const PostsPromise = collection.insertOne(posts);

    await Promise.all([PostsPromise])
      .then(([resolvedPosts]) => {
        const resolvedPostsData = resolvedPosts.acknowledged;
        if (resolvedPostsData) {
          return (dict["message"] = "Insert Successful");
        }
      })
      .catch((error) => logger.error(error));

    return dict;
  };
};

export default makeInsertPosts;
