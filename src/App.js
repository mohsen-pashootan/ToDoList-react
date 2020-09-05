import React from "react";
import Input from "./component/input";
import List from "./component/list";
import { ToDoAdded, CheckedItem, DeleteTask } from "./stateManeger/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  function handleToDoAdded(text) {
    if (text !== "") {
      dispatch(ToDoAdded(text));
    }
  }

  function handleCheckedItem(item) {
    dispatch(CheckedItem(item));
  }

  function handleDeleteTask(id, e) {
    e.stopPropagation();
    dispatch(DeleteTask(id));
  }

  function handleEditTask(id, e) {
    e.stopPropagation();
  }
  return (
    <>
      <Input addText={handleToDoAdded} />
      <List
        task={selector.task}
        onCheckedItem={handleCheckedItem}
        ondeleteTask={handleDeleteTask}
        oneditTask={handleEditTask}
      />
    </>
  );
}

export default App;
