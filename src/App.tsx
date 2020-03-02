import React, { useState } from 'react'
import TaskList from './compornents/TaskList'
import TaskInput from './compornents/TaskInput'
import { Task } from './Types'
import './App.css'

const initialState: Task[] = [
  {
    id: 2,
    title: '次のTodo',
    done: false
  },{
    id: 1,
    title: '最初ののTodo',
    done: true
  }
]

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div>
      <TaskInput tasks={tasks} setTasks= {setTasks}/>
      <TaskList tasks={tasks} setTasks= {setTasks}/>
    </div>
  )
}

export default App;
