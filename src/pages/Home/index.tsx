import MainTemplates from "../../templates/MainTemplates";
import Container from "../../components/Container";
import CountDown from "../../components/CountDown";
import MainForm from "../../components/MainForm";

export default function Home() {
  return (
    <MainTemplates>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplates>
  );
}
