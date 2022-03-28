import { Container } from "./styles";

interface Props {
  content: React.ReactChildren;
}

export default function Content({ content }: Props) {
  return <Container>{content}</Container>;
}
