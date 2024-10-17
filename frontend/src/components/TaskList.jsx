import React from 'react';

const TaskList = ({ tasks, fetchTasks }) => {
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/delete_task.php?id=${id}`);
    fetchTasks();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="border p-2 mb-2 flex justify-between items-center">
          {task.task}
          <button onClick={() => handleDelete(task.id)} className="text-red-500">x</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
