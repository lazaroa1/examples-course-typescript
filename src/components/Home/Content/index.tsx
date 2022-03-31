import { Container } from "./styles";
import Options from "./Options";

interface Module {
  model?: number;
  modelName?: string;
}

interface Props {
  modules: Module[];
  content: React.ReactChildren;
}

export default function Content({ modules, content }: Props) {
  return (
    <Container>
      <div style={{ backgroundColor: "blue" }}>{content}</div>
      <div className="modules-container">
        {modules.map((module) => (
          <div key={module.model}>
            <Options {...module} />
          </div>
        ))}
      </div>
    </Container>
  );
}
