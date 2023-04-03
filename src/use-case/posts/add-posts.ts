import { createPostsParams } from "../../interface/posts";
import { addPostsParams } from "./interface";

const makeAddPosts = ({ insertPosts }: addPostsParams) => {
  return async ({ posts }: createPostsParams) => {
    if (!posts) throw new Error("Body Undefined");
    const { body } = posts;
    if (typeof body !== "string") throw new Error("Error creating post");

    const createPostsPromise = insertPosts({ posts });
    const createPosts: { message: string } = { message: "" };

    await Promise.all([createPostsPromise]).then(([resolvedPosts]) => {
      Object.assign(createPosts, resolvedPosts);
    });

    return createPosts;
  };
};

export default makeAddPosts;
