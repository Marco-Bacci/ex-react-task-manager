import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const TaskList = () => {
  const { tasks } = useContext(GlobalContext);

  return (
    <div className="container">
      <h1>TASK LIST</h1>
    
    </div>
  );
};

export default TaskList;
