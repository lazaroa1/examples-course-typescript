import { Container } from "./styles";

interface Props {
  model?: number;
  modelName?: string;
}

export default function Options({ model, modelName }: Props) {
  return <Container key={model}>{modelName}</Container>;
}
