import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TasklList from "./TaskList"
import AddTask from "./AddTask";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<TasklList/>} />
        <Route path="/add" element={<AddTask/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
