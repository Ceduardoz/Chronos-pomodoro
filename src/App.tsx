import { BoltIcon, CirclePlay, CirclePlayIcon, HouseIcon, MoonIcon, PlayIcon, SunIcon, TableConfigIcon, TimerIcon, TimerResetIcon } from "lucide-react";

import "./styles/global.css";
import "./styles/theme.css";

export function App(){
  return (
    <>
      <div className="container">
        <div className="content">
          <header>
            <button>
              <TimerIcon/>
              Chronos
            </button>
          </header>
          <nav>
              <button>
                <HouseIcon/>
              </button>
              <button>
                <TimerResetIcon/>
              </button>
              <button>
                <BoltIcon />
              </button>
              <button>
                <SunIcon/>
              </button>
          </nav>
          <section className="timer"></section>
          <div className="task">
            <p>task</p>
            <input type="text" placeholder="Ex: estudar para prova"/>
            <p>Nesse inicio <strong>foque</strong> por <strong>25 min.</strong></p>
            <button>
              <CirclePlayIcon/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}