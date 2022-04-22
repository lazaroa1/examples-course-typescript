import { Container } from "./styles";
import { CopyBlock, dracula } from "react-code-blocks";

interface Props {
  code: string;
}

function BlockCode({ code }: Props) {
  return (
    <Container>
      <CopyBlock
        language={"jsx"}
        text={code}
        showLineNumbers
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </Container>
  );
}

export default BlockCode;
