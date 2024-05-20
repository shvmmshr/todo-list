import React, { useState } from 'react';
import '../Button/button.css';
const TaskForm = ({ fetchTasks }) => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost/todo-list/add_task.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ task }),
    });
    setTask('');
    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Add a new task"
        required
      />
      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;
