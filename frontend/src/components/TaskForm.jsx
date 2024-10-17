import React, { useState } from "react";
import "../Button/button.css";

const TaskForm = ({ fetchTasks }) => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/add_task.php", {
        // Ensure correct port
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ title: task }), // Use the correct key
      });

      const data = await response.json(); // Parse the response

      if (data.status === "success") {
        setTask(""); // Clear the input if successful
        fetchTasks(); // Refresh tasks
      } else {
        console.error("Error adding task:", data.message); // Log error message
      }
    } catch (error) {
      console.error("Error:", error); // Catch network errors
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4 gap-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="shadow-sm border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full placeholder-gray-400"
        placeholder="What needs to be done?"
      />
      <button type="submit" className="add-task-btn">
        Add Task
      </button>
    </form>
  );

};

export default TaskForm;
