import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";
const TaskDetail = () => {
  const { id } = useParams();
  const { tasks, removeTask } = useContext(GlobalContext);
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return <h2>Task non trovata</h2>;
  }
  const handleDelete = async () => {
    try {
      await removeTask(task.id);
      alert("Task eliminata con successo");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Dettaglio della Task</h2>
      <p>
        <strong>Nome Task:</strong> {task.title}{" "}
      </p>
      <p>
        <strong>Descrizione:</strong> {task.description}
      </p>
      <p>
        <strong>Stato:</strong> {task.status}
      </p>
      <p>
        <strong>Data di creazione:</strong>
        {new Date(task.createdAt).toLocaleDateString()}
      </p>
      <button onClick={handleDelete}> Elimina Task</button>
    </div>
  );
};

export default TaskDetail;
