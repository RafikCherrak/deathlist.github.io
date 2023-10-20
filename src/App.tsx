import React, { FC, ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import { ITask } from './Interfaces';
import './App.css';
import TodoTask from './Components/TodoTask';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    }
    setDeadline(Number(event.target.value));
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="test" placeholder="Nom Complet" name="task" value={task} onChange={handleChange}></input>
          <input type="number" placeholder="Age" name="deadline" value={deadline} onChange={handleChange}></input>
        </div>
        <button onClick={addTask}> ajouter une Personne</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>)
}

export default App;
