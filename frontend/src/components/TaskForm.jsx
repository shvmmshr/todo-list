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
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Add a new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
