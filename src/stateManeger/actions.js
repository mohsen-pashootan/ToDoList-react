function actionCreator(type, payload) {
  return {
    type,
    payload,
  };
}

export const ToDoAdded = (text) => actionCreator("TO_DO_ADDED", text);
export const CheckedItem = (item) => actionCreator("CHECKED_ITEM", item);
export const DeleteTask = (item) => actionCreator("DELETE_TASK", item);
export const EditTask = (item) => actionCreator("EDIT_TASK", item);
