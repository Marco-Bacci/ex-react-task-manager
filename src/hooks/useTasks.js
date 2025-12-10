import { useState, useEffect } from "react";
const { VITE_API_URL } = import.meta.env;

function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${VITE_API_URL}/task`)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error(error));
  }, []);

  return { tasks };
}

export default useTasks;
