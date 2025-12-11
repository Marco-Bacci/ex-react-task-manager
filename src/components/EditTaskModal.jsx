import { useState, useRef } from "react";
import Modal from "./Modal";

export default function EditTaskModal({ show, onClose, task, onSave }) {
  const [editedTask, setEditedTask] = useState(task);
  const editFormRef = useRef(null);

  const changeEditedTask = (key, event) => {
    setEditedTask((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedTask);
  };

  const { title, description, status } = editedTask;

  return (
    <Modal
      title="Modifica Task"
      content={
        <form ref={editFormRef} onSubmit={handleSubmit} className="task-form">
          <div className="form-group">
            <label htmlFor="task-title">Nome Task</label>
            <input
              id="task-title"
              type="text"
              value={title}
              onChange={(e) => changeEditedTask("title", e)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="task-description">Descrizione</label>
            <textarea
              id="task-description"
              value={description}
              onChange={(e) => changeEditedTask("description", e)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="task-status">Stato</label>
            <select
              id="task-status"
              value={status}
              onChange={(e) => changeEditedTask("status", e)}
            >
              {["To do", "Doing", "Done"].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </form>
      }
      confirmText="Salva"
      show={show}
      onClose={onClose}
      onConfirm={() => editFormRef.current?.requestSubmit()}
    />
  );
}
