import React, { useState } from "react";
import Input from "./component/input";
import List from "./component/list";

function App() {
  const [task, setTask] = useState([]);

  function handleToDoAdded(text) {
    if (text !== "") {
      const newTask = [...task];
      newTask.push({ title: text, id: Math.random(), completed: false });
      setTask(newTask);
      console.log(task);
    }
  }

  function handleCheckedItem(item) {
    const index = task.findIndex((x) => x.id === item.id);
    const newTask = [...task];
    newTask.splice(index, 1, {
      title: item.title,
      id: item.id,
      completed: !item.completed,
    });
    setTask(newTask);
    console.log(newTask);
  }

  function handleDeleteTask(id, e) {
    e.stopPropagation();
    const index = task.findIndex((item) => item.id === id);
    const newTask = [...task];
    newTask.splice(index, 1);
    setTask(newTask);
  }

  function handleEditTask(id, e) {
    e.stopPropagation();

    console.log(id);
  }

  return (
    <>
      <Input addText={handleToDoAdded} />
      <List
        task={task}
        ondeleteTask={handleDeleteTask}
        onCheckedItem={handleCheckedItem}
        oneditTask={handleEditTask}
      />
    </>
  );
}

export default App;
