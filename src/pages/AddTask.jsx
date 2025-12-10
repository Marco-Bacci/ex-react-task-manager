import { useState, useRef, useMemo } from "react";
const symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();

  const taskError = useMemo(() => {
    if (!title.trim()) {
      return "Scrivi il nome della task";
    }
    if (title.split("").some((char) => symbols.includes(char))) {
      return "Il nome non può contenere caratteri speciali";
    }
    return "";
  }, [title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskError) return;
    const newTask = {
      title: title.trim(),
      description: descriptionRef.current.value,
      status: statusRef.current.value,
    };
    console.log(newTask);
  };

  return (
    <div className="container">
      <h1>ADD TASK</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          task
          <input
            type="textarea"
            placeholder="nome task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        {taskError && <p style={{ color: "red" }}>{taskError}</p>}
        <label>
          {" "}
          descrizione task
          <input
            type="text"
            placeholder="descrizione task "
            ref={descriptionRef}
          />
        </label>
        <label>
          stato
          <select ref={statusRef} defaultValue="To do">
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <button type="submit" disabled={taskError}>
          aggiungi task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
