import Header from "./Header";
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
      <div className="bg-primary">
        <Header />
      </div>
      <div>
        <Content content={children} modules={route.modules} routes={routes} />
      </div>
    </Container>
  );
}
