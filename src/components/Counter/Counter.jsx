import React from "react";
import { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-testid` key value pair

  const [counter, setCounter] = useState(count);

  return (
    <div className={styles.counter}>
      <button 
        data-testid="task-counter-increment-button"
        className={styles.button}
        onClick={() => setCounter(counter + 1)}
        >
          Inc Count
        </button>
      <span data-testid="task-counter-value">{counter}</span>
      <button 
        data-testid="task-counter-decrement-button"
        className={styles.button}
        onClick={() => counter > 1 && setCounter(counter - 1)}
        >Dec Count</button>
    </div>
  );
};

export default Counter;
