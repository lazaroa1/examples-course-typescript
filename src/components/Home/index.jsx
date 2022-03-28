import Header from "./Header";
import SideMenu from "./SideMenu";
import Content from "./Content";
import { Container } from "./styles";

interface props {
  // route: {};
  // routes: [];
  children: React.ReactChildren;
}

export default function Home({ children }: props) {
  return (
    <Container>
      <Header />
      <SideMenu />
      <Content content={children} />
    </Container>
  );
}
