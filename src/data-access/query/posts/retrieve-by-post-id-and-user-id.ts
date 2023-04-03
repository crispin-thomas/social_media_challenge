import { postsByIdUserIdParams } from "../../../interface/posts";
import { logger } from "../../../logger";
import { connectionParams } from "../../interface";

const makeRetrievePostsByIdUserId = ({ socialMediaDb }: connectionParams) => {
  return async ({ userId, postId }: postsByIdUserIdParams) => {
    const db = await socialMediaDb();
    const collection = db.collection("posts");

    const projection = { _id: 0 };
    const postsByIdUserIdPromise = collection.findOne(
      {
        userId: userId,
        id: postId,
      },
      { projection }
    );

    const posts: any = {};

    await Promise.all([postsByIdUserIdPromise])
      .then(([resolvedPostsByIdUserId]) => {
        if (resolvedPostsByIdUserId) {
          Object.assign(posts, resolvedPostsByIdUserId);
        }
      })
      .catch((error) => logger.error(error));

    return posts;
  };
};

export default makeRetrievePostsByIdUserId;
