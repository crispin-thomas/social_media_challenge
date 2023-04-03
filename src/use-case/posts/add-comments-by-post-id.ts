import { createCommentByPostIdParams } from "../../interface/posts";
import { addCommentByPostIdParams } from "./interface";

const makeAddCommentByPostId = ({
  insertCommentByPostId,
}: addCommentByPostIdParams) => {
  return async ({ postId, comment }: createCommentByPostIdParams) => {
    if (!comment) throw new Error("Body Undefined");
    const { body } = comment;
    if (typeof body !== "string") throw new Error("Error creating comment");

    const createCommentByPostIdPromise = insertCommentByPostId({
      postId,
      comment,
    });
    const createCommentByPostId: { message: string } = { message: "" };

    await Promise.all([createCommentByPostIdPromise]).then(
      ([resolvedCommentByPostId]) => {
        Object.assign(createCommentByPostId, resolvedCommentByPostId);
      }
    );

    return createCommentByPostId;
  };
};

export default makeAddCommentByPostId;
