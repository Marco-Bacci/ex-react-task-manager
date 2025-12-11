import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext, useState } from "react";
import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";
const TaskDetail = () => {
  const { id } = useParams();
  const { tasks, removeTask, updateTask } = useContext(GlobalContext);
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === parseInt(id));

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  if (!task) {
    return <h2>Task non trovata</h2>;
  }
  const handleDelete = async () => {
    try {
      await removeTask(task.id);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  const handleUpdate = async (updatedTask) => {
    try {
      await updateTask(updatedTask);
      setShowEditModal(false);
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
      <button onClick={() => setShowDeleteModal(true)}> Elimina Task</button>
      <button onClick={() => setShowEditModal(true)}> Modifica Task</button>
      <Modal
        title="Conferma eliminazione"
        content={<p>Vuoi davvero eliminare questa task?</p>}
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        confirmText="Elimina"
      />
      <EditTaskModal
        task={task}
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleUpdate}
      />
    </div>
  );
};

export default TaskDetail;
