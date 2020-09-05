export const INIT_STATE = {
  task: [],
};

export default function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "TO_DO_ADDED":
      const newTask = [...state.task];
      newTask.push({
        title: action.payload,
        id: Math.random(),
        completed: false,
      });
      return {
        ...state,
        task: newTask,
      };

    case "CHECKED_ITEM":
      const index = state.task.findIndex((x) => x.id === action.payload.id);
      const newTask2 = [...state.task];
      newTask2.splice(index, 1, {
        title: action.payload.title,
        id: action.payload.id,
        completed: !action.payload.completed,
      });
      return {
        ...state,
        task: newTask2,
      };

    case "DELETE_TASK":
      const index2 = state.task.findIndex((item) => item.id === action.payload);
      const newTask3 = [...state.task];
      newTask3.splice(index2, 1);
      return {
        ...state,
        task: newTask3,
      };
    default:
      return state;
  }
}
