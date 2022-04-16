import { Container } from "./styles";
import { Link } from "react-router-dom";

interface Props {
  routes: [];
}

export default function SideMenu({ routes }: Props) {
  return (
    <Container>
      <ul className="list-container">
        {routes.map((route, index) => (
          <li key={index} className="mb-2">
            <Link to={route.path} className="section">
              <b>{route.name}</b>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
