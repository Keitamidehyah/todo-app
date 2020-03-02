import React from 'react';
import { Task } from '../Types';

type Props = {
  task: Task
  handleDone: (task: Task) => void
  handleDelete: (task: Task) => void
}

const TaskItem: React.FC<Props> = ({task, handleDone, handleDelete }) => {
  return (
    <li>
      <label className={task.done ? 'done' : ''} >
        <input 
          type="checkbox"
          className="checkbox-input" 
          onClick={() => handleDone(task)}
          defaultChecked={ task.done }
        />
        <span className="checkbox-label">{ task.title }</span>
      </label>
      <button 
        onClick={() => handleDelete(task)}
        className="btn is-delete"
      >削除</button>
    </li>
  )
}

export default TaskItem;