import { useState, useRef } from "react";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();
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
