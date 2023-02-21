import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ZipList } from './ZipList';
import { ToDo } from './types';
import './App.css'

function App() {
  let todos = [
    {
      name: "Finish ZipList Tests",
      description: "Make sure all of the methods have tests and pass",
      status: "pending",
      type: "task"
    } as ToDo,
    {
      name: "Print ZipList",
      status: "completed",
      type: "task"
    } as ToDo,
    {
      name: "Call with Chris",
      status: "canceled",
      type: "event"
    } as ToDo
  ];

  let list = new ZipList<ToDo>(todos);

  return (
    <div className="App">
      <ul>
        {list.toList().map((item, index) => {
          return (
            <li key={index} className={[item.type, item.status].join(" ")}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.status}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
