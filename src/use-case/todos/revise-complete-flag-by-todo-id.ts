import { completeFlagByTodoIdParams } from "../../interface/todos";
import { reviseCompleteFlagByTodoIdParams } from "./interface";

const makeReviseCompleteFlagByTodoId = ({
  updateCompleteFlagByTodoId,
}: reviseCompleteFlagByTodoIdParams) => {
  return async ({ todoId }: completeFlagByTodoIdParams) => {
    const reviseCompleteFlagByTodoIdPromise = updateCompleteFlagByTodoId({
      todoId,
    });

    const reviseCompleteFlagByTodoId: any = {};
    await Promise.all([reviseCompleteFlagByTodoIdPromise]).then(
      ([resolvedCompleteFlagByTodoId]) => {
        Object.assign(reviseCompleteFlagByTodoId, resolvedCompleteFlagByTodoId);
      }
    );
    return reviseCompleteFlagByTodoId;
  };
};

export default makeReviseCompleteFlagByTodoId;
