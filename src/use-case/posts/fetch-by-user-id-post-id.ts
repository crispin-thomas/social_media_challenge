import { postsByIdUserIdParams } from "../../interface/posts";
import { fetchPostsByIdUserIdParams } from "./interface";

const makeFetchPostsByIdUserId = ({
  retrievePostsByIdUserId,
}: fetchPostsByIdUserIdParams) => {
  return async ({ postId, userId }: postsByIdUserIdParams) => {
    const fetchPostsByIdUserIdPromise = retrievePostsByIdUserId({
      postId,
      userId,
    });

    const fetchPostsByIdUserId: any = {};
    await Promise.all([fetchPostsByIdUserIdPromise]).then(
      ([resolvedPostsByIdUserId]) => {
        Object.assign(fetchPostsByIdUserId, resolvedPostsByIdUserId);
      }
    );

    return fetchPostsByIdUserId;
  };
};

export default makeFetchPostsByIdUserId;
