import { Container } from "./styles";

interface Props {
  model?: number;
  modelName?: string;
}

export default function Options({ model, modelName }: Props) {
  console.log(model, modelName);
  return <Container key={model}>{modelName}</Container>;
}
