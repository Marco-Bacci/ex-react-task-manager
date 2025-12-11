import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import TaskRow from "../components/TaskRow";

const TaskList = () => {
  const { tasks } = useContext(GlobalContext);

  const [sortBy, setSortBy] = useState("title")
  const [sortOrder, setSortOrder] = useState("1")

  return (
    <div className="container">
      <h1>TASK LIST</h1>
      <table className="task-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return <TaskRow key={task.id} task={task} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
