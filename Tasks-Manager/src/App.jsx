import { useState } from "react";
import Header from "./Header.jsx";
import TaskInput from "./TaskInput.jsx";
import TaskList from "./TaskList.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    setTasks([...tasks, {id: Date.now(), text, done: false }]);
  }
  
  function toggleTask(id) {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <>
    <Header />
    <TaskInput onAdd={addTask} />
    <TaskList tasks={tasks} onToggle={toggleTask} />
    <Footer />
    </>
  );
}

export default App
