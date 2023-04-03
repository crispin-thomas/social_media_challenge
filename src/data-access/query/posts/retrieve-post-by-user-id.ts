import { postsByUserIdParams } from "../../../interface/posts";
import { logger } from "../../../logger";
import { connectionParams } from "../../interface";

const makeRetrievePostsByUserId = ({ socialMediaDb }: connectionParams) => {
  return async ({ userId }: postsByUserIdParams) => {
    const db = await socialMediaDb();
    const collection = db.collection("posts");

    const postsByUserIdCollectionPromise = collection.find(
      { userId: userId },
      { projection: { _id: 0 } }
    );

    const posts: any[] = [];

    await Promise.all([postsByUserIdCollectionPromise])
      .then(async ([resolvedPostsByUserIdCollection]) => {
        const resolvedPostsByUserIdPromise =
          resolvedPostsByUserIdCollection.toArray();
        await Promise.all([resolvedPostsByUserIdPromise])
          .then(([resolvedPostsByUserId]) => {
            posts.push(...resolvedPostsByUserId);
          })
          .catch((error) => logger.error(error));
      })
      .catch((error) => logger.error(error));

    return posts;
  };
};

export default makeRetrievePostsByUserId;
