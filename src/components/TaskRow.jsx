const TaskRow = ({ task }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "To do":
        return { backgroundColor: "rgb(255, 120, 120)" };
      case "Doing":
        return { backgroundColor: "rgb(255, 230, 120)" };
      case "Done":
        return { backgroundColor: "rgb(140, 255, 160)" };
      default:
        return {};
    }
  };

  return (
    <tr>
      <td>{task.title}</td>
      <td style={getStatusColor(task.status)}>{task.status}</td>
      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>
  );
};

export default TaskRow;
