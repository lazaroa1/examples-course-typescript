import Header from "./Header";
import SideMenu from "./SideMenu";
import { Container } from "./styles";

interface props {
  // route: {};
  // routes: [];
  children: React.ReactChildren;
}

export default function Home({ children }: props) {
  console.log("aqui", children);
  return (
    <Container>
      {<Header />}
      <div>
        <SideMenu />
        <div className="content">{children}</div>
      </div>
    </Container>
  );
}
