import MainTemplates from "../../templates/MainTemplates";
import Container from "../../components/Container";
import CountDown from "../../components/CountDown";
import MainForm from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export default function Home(props: HomeProps) {
  return (
    <MainTemplates>
      <Container>
        <CountDown {...props} />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplates>
  );
}
