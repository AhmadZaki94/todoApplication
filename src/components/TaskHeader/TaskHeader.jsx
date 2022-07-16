import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({data}) => {
  // sample values to be replaced
  let totalTask = data.length;
  let unDone = data.filter((e) => {
    return e.done === false;
  });

  let unCompletedTask = unDone.length;

  
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <b data-testid="header-remaining-task">{unCompletedTask}</b>
      <b data-testid="header-total-task">{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
