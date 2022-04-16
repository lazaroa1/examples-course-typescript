import { Container } from "./styles";
import Options from "./Options";
import SideMenu from "./SideMenu";

interface Module {
  model?: number;
  modelName?: string;
}

interface Props {
  modules: Module[];
  content: React.ReactChildren;
  routes: [];
}

export default function Content({ modules, content, routes }: Props) {
  return (
    <Container>
      <div className="col-3">
        <SideMenu routes={routes} />
      </div>
      <div className="content col">{content}</div>
      <div className="modules-container col-2">
        {modules.map((module) => (
          <div key={module.model}>
            <Options {...module} />
          </div>
        ))}
      </div>
    </Container>
  );
}
