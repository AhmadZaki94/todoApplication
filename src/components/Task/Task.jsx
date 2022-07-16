import React from "react";
import styles from "./task.module.css";
import { Counter } from '../Counter';

const Task = ({ showData, setData}) => {
  // NOTE: do not delete `data-testid` key value pair

  const handleCheck = (elem) => {
    elem.done = !elem.done;
    setData([...showData]);
  }

  return (
    <div>
        {showData?.map((elem) => (
          <li data-testid="task" className={styles.task} key={elem.id}>
          <input 
            type="checkbox" 
            data-testid="task-checkbox" 
            className={styles.chekb}
            checked={elem.done}
            onChange={() => handleCheck(elem)}
            />
          {elem.done ? (
            <div 
              data-testid="task-text"
              style={{ textDecoration: "line-through", color: "gray"}}
              className="txt">
              {elem.text}
              </div>
          ): (
            <div data-testid="task-text" className="txt">
              {elem.text}
            </div>
          )}

          {/* Counter here */}
          <Counter count={elem.count}/>
          <button 
          data-testid="task-remove-button"
          className={styles.cross}
          onClick={() => setData(showData.filter((e) => e.id !== elem.id))}
          >
            Done
          </button>
        </li>
        ))}
    </div>
  );
};

export default Task;
