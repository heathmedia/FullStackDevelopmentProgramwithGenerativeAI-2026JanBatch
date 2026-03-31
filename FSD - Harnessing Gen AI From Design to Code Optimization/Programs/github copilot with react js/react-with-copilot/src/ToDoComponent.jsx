// provide a logic to add a new task to the list of 
// tasks and also provide a logic to delete a task from the list of tasks
// apply styling using inline css for below code 
import React, { useState } from 'react';

function ToDoComponent() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
 
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };    

    return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <button
        onClick={addTask}
        style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Add Task
      </button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
            {task} <button onClick={() => deleteTask(index)} style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoComponent;
