import Header from "./Header";
import SideMenu from "./SideMenu";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />
      <div>
        <SideMenu />
      </div>
    </Container>
  );
}
