import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

var todoList = [
  {id: 1, title: "Complete the assignment"}, 
  {id: 2, title: "Read for 10 minutes"},
  {id: 3, title: "Clean my house"},
  {id: 4, title: "Practice Code"}
  ];

function App() {
  return (
    <>
      <div>
        <h1>To Do List</h1>
      </div>
      <div>
        <ul>
          {todoList.map(function (item) {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
