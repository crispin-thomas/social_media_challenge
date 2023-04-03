import { socialMediaDb } from "./connection";
import makePostsAccess from "./query/posts";
import makeTodoListsAccess from "./query/todos";

const todoListsAccess = makeTodoListsAccess({ socialMediaDb });
const postsAccess = makePostsAccess({ socialMediaDb });

export { socialMediaDb, todoListsAccess, postsAccess };
