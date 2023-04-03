import { createCommentByPostIdParams } from "../../../interface/posts";
import { logger } from "../../../logger";
import { connectionParams } from "../../interface";

const makeInsertCommentByPostId = ({ socialMediaDb }: connectionParams) => {
  return async ({ postId, comment }: createCommentByPostIdParams) => {
    const dict = { message: "" };
    const db = await socialMediaDb();
    const collection = db.collection("comments");
    if (!comment) return (dict["message"] = "Insert Unsuccessful");

    const commentByPostIdPromise = collection.insertOne({
      postId: postId,
      ...comment,
    });

    await Promise.all([commentByPostIdPromise])
      .then(([resolvedCommentByPostId]) => {
        const resolvedCommentByPostIdData =
          resolvedCommentByPostId.acknowledged;
        if (resolvedCommentByPostIdData) {
          return (dict["message"] = "Insert Successful");
        }
      })
      .catch((error) => logger.error(error));

    return dict;
  };
};

export default makeInsertCommentByPostId;
