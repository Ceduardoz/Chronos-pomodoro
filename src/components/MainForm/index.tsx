import { PlayCircleIcon } from "lucide-react";

import DefaultInput from "../DefaultInput";
import DefaultButton from "../DefaultButton";
import Cycles from "../Cycles";
import { useRef } from "react";

export default function MainForm() {
  const taskName = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(taskName);
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="task"
          type="text"
          placeholder="Digite a tarefa"
          ref={taskName}
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
