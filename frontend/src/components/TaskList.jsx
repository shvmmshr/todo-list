import React from 'react';

const TaskList = ({ tasks, fetchTasks }) => {
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/delete_task.php?id=${id}`);
    fetchTasks();
  };

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="border border-gray-300 p-4 rounded-lg flex justify-between items-center bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
        >
          <span className="text-gray-800 font-medium">{task.task}</span>
          <button
            onClick={() => handleDelete(task.id)}
            className="text-red-600 hover:text-red-800 transition-transform transform hover:scale-110 duration-200 ease-in-out"
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );


};

export default TaskList;
