import { PlayCircleIcon } from "lucide-react";

import DefaultInput from "../DefaultInput";
import DefaultButton from "../DefaultButton";
import Cycles from "../Cycles";
import { useRef } from "react";
import type { TaskModel } from "../../models/taksModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export default function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Please enter a task name.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: "worktime",
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prev => {
      return {
        ...prev,
        config: {
          ...prev.config,
        },
        activeTasks: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: "00:00",
        tasks: [...prev.tasks, newTask],
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="task"
          type="text"
          placeholder="Digite a tarefa"
          ref={taskNameInput}
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum, dolor sit amet.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton color="green">
          <PlayCircleIcon />
        </DefaultButton>
        <DefaultButton color="red">
          <PlayCircleIcon />
        </DefaultButton>
      </div>
    </form>
  );
}
