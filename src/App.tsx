import { useState } from "react";

import Home from "./pages/Home";

import type { TaskStateModel } from "./models/TaskStateModel";
import { TaskContext, TaskContextProvider } from "./contexts/TaskContext";

import "./styles/global.css";
import "./styles/theme.css";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTasks: null,
  currentCycle: 0,
  config: {
    worktime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);
  return (
    <>
      <TaskContextProvider value={{ outracoisa: 321 }}>
        <Home />
      </TaskContextProvider>
    </>
  );
}
