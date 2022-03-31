import Header from "./Header";
import SideMenu from "./SideMenu";
import Content from "./Content";
import { Container } from "./styles";

interface props {
  route: {};
  routes: [];
  children: React.ReactChildren;
}

export default function Home({ route, routes, children }: props) {
  return (
    <Container>
      <Header />
      <SideMenu routes={routes} />
      <Content content={children} modules={route.modules} />
    </Container>
  );
}
