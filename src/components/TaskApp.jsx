import React from "react";
import { useState } from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import Tasks  from './Tasks/Tasks';
import data from '../data/tasks.json';

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [newData, setNewData] = useState(data);
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader data={newData} />
      <AddTask addData={setNewData} data={newData}/>
      <Tasks data={newData} setData={setNewData} />
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
