import {
  Container,
  Center,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Icon,
} from "@chakra-ui/react";
import { FiPaperclip, FiLink2 } from "react-icons/fi";
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
            <TabPanel>link</TabPanel>
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
