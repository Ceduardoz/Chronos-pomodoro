import { PlayCircleIcon } from "lucide-react";

import DefaultInput from "../DefaultInput";
import DefaultButton from "../DefaultButton";
import Cycles from "../Cycles";

export default function MainForm() {
  return (
    <form action="" className="form">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="task"
          type="text"
          placeholder="Digite a tarefa"
          defaultValue="Valor Preenchido"
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
