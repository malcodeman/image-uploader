import { Container, Center } from "@chakra-ui/react";
import FileUploader from "./FileUploader";

function App() {
  const onDrop = () => {};

  return (
    <Center minHeight={"100vh"}>
      <Container maxW={"container.sm"}>
        <FileUploader onDrop={onDrop} />
      </Container>
    </Center>
  );
}

export default App;
