import Container from "../../components/Container/";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

type MainTemplatesProps = {
  children: React.ReactNode;
};

export default function MainTemplates({ children }: MainTemplatesProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
