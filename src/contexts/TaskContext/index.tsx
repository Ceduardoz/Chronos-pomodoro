import React, { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

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

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialProviderValue = {
  state: initialState,
  setState: () => {},
};

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContext =
  createContext<TaskContextProps>(initialProviderValue);

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  return (
    <>
      <TaskContext.Provider value={initialProviderValue}>
        {children}
      </TaskContext.Provider>
    </>
  );
}
