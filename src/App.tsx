import { Container } from "./components/Container/";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";

import "./styles/global.css";
import "./styles/theme.css";
import DefaultInput from "./components/DefaultInput";
import Cycles from "./components/Cycles";
import DefaultButton from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              labelText='Tarefa'
              id='task'
              type='text'
              placeholder='Digite a tarefa'
              disabled
              defaultValue='Valor Preenchido'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum, dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton color='green'>
              <PlayCircleIcon />
            </DefaultButton>
            <DefaultButton color='red'>
              <PlayCircleIcon />
            </DefaultButton>
          </div>
        </form>
      </Container>
    </>
  );
}
