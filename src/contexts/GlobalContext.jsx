import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  return <GlobalContext.Provider value={{tasks, setTasks}}>{children}</GlobalContext.Provider>;
}
