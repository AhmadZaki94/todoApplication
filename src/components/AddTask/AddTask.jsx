import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({addData, data}) => {
  // NOTE: do not delete `data-testid` key value pair

  const [textData, setTextData] = useState({
    count: 1,
    done: false,
    id: null,
    text: "",
  });

  const handleAdd = () => {

    let flag = true;
    for(let i = 0; i < data.length; i++)
    {
        if(textData.text === data[i].text)
        {
          flag = false;
        }
    }

    if(flag && textData.text !== "") 
    {
      addData([...data, textData]);
    }
  }




  return (
    <div className={styles.todoForm}>
      <input 
        data-testid="add-task-input" 
        type="text" 
        className={styles.addinput} 
        placeholder="Add Task"
        onInput={(e) => setTextData({
          ...textData,
          text: e.target.value,
          id: data.length + 1,
        })}
        />
      <button 
        data-testid="add-task-button"
        className={styles.addbtn}
        onClick = {handleAdd}>
          Add
      </button>
    </div>
  );
};

export default AddTask;
