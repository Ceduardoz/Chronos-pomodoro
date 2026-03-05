import type { TaskModel } from "./taksModel";

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTasks: TaskModel | null;
  currentCycle: number;
  config: {
    worktime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
