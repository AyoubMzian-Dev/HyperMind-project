"use client"
import { useState } from 'react';

export default function Home({ Component }: any) {
  // Initialize tasks state as an empty array of strings and task state as an empty string
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState('');

  // Function to add a new task to the tasks array and clear the input field
  const addTask = () => {
    // Check if the task input field is not empty
    if (task) {
      // Update the tasks array by adding the current task and then clear the task input field
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const putReq =() =>{
    
  
  }

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center bg-black">
      
    </main>
  );
}
