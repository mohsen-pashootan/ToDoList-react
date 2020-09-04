import React from "react";

export default function List({
  task,
  ondeleteTask,
  onCheckedItem,
  oneditTask,
}) {
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
                <span
                  className="close"
                  onClick={(e) => ondeleteTask(item.id, e)}
                >
                  {"\u00D7"}
                </span>
                <span className="edit" onClick={(e) => oneditTask(item.id, e)}>
                  {"E"}
                </span>
              </li>
            }
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
