export interface createPostsParams {
  posts: { id: number; userId: number; body: string } | undefined;
}

export interface postsByUserIdParams {
  userId: number;
}

export interface postsByIdUserIdParams {
  userId: number;
  postId: number;
}

export interface createCommentByPostIdParams {
  postId: number;
  comment:
    | {
        id: number;
        userId: number;
        body: string;
      }
    | undefined;
}
