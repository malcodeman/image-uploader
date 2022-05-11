import {
  Container,
  Center,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { FiPaperclip, FiLink2, FiCamera } from "react-icons/fi";
import { FaUnsplash, FaGoogleDrive, FaDropbox } from "react-icons/fa";
import { map } from "ramda";

import FileUploader from "./FileUploader";

const SIDEBAR = [
  {
    icon: FiPaperclip,
    value: "device",
  },
  {
    icon: FiLink2,
    value: "link",
  },
  {
    icon: FiCamera,
    value: "camera",
  },
  {
    icon: FaUnsplash,
    value: "unsplash",
  },
  {
    icon: FaGoogleDrive,
    value: "drive",
  },
  {
    icon: FaDropbox,
    value: "dropbox",
  },
];

function App() {
  const onDrop = () => {};

  return (
    <Center minHeight={"100vh"}>
      <Container maxW={"container.sm"}>
        <Tabs size="lg" orientation="vertical">
          <TabList>
            {map(
              (item) => (
                <Tab>
                  <Icon as={item.icon} />
                </Tab>
              ),
              SIDEBAR
            )}
          </TabList>
          <TabPanels>
            <TabPanel height="100%">
              <FileUploader onDrop={onDrop} />
            </TabPanel>
            <TabPanel height="100%">
              <Center height="100%">
                <Container maxW="96">
                  <InputGroup size="md">
                    <Input placeholder="Enter a URL" />
                    <InputRightElement>
                      <IconButton
                        type="submit"
                        size="md"
                        aria-label="Import"
                        icon={<FiLink2 size={16} />}
                      />
                    </InputRightElement>
                  </InputGroup>
                </Container>
              </Center>
            </TabPanel>
            <TabPanel>camera</TabPanel>
            <TabPanel>unsplash</TabPanel>
            <TabPanel>drive</TabPanel>
            <TabPanel>dropbox</TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Center>
  );
}

export default App;
