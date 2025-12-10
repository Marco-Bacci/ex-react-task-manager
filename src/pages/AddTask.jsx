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
  return (
    <div className="container">
      <h1>ADD TASK</h1>
      <form>
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
      </form>
    </div>
  );
};

export default AddTask;
