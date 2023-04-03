import { postsByUserIdParams } from "../../interface/posts";
import { fetchPostsByUserIdParams } from "./interface";

const makeFetchPostsByUserId = ({
  retrievePostsByUserId,
}: fetchPostsByUserIdParams) => {
  return async ({ userId }: postsByUserIdParams) => {
    const fetchPostsByUserIdPromise = retrievePostsByUserId({ userId });

    const fetchPostsByUserId: any[] = [];

    await Promise.all([fetchPostsByUserIdPromise]).then(
      ([resolvedPostsByUserId]) => {
        fetchPostsByUserId.push(...resolvedPostsByUserId);
      }
    );
    return fetchPostsByUserId;
  };
};

export default makeFetchPostsByUserId;
