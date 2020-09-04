import React from "react";

export default function List({ task, deleteTask, onCheckedItem, editTask }) {
  return (
    <div>
      <ul>
        {task.map((item) => (
          <React.Fragment key={item.id}>
            {
              <li
                className={`${item.completed ? "checked" : ""}`}
                onClick={() => onCheckedItem(item)}
              >
                {item.title}
                <span className="close" onClick={(e) => deleteTask(item.id, e)}>
                  {"\u00D7"}
                </span>
                <span className="close" onClick={(e) => editTask(item.id, e)}>
                  {"\u00D7"}
                </span>
              </li>
            }
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
