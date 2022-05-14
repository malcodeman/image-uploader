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
import { FiPaperclip, FiLink2, FiCamera } from "react-icons/fi";
import {
  FaUnsplash,
  FaGoogleDrive,
  FaDropbox,
  FaFacebook,
} from "react-icons/fa";
import { map } from "ramda";

import FileUploader from "./FileUploader";
import LinkUploader from "./LinkUploader";

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
  {
    icon: FaFacebook,
    value: "facebook",
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
                <Tab key={item.value}>
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
              <LinkUploader />
            </TabPanel>
            <TabPanel>camera</TabPanel>
            <TabPanel>unsplash</TabPanel>
            <TabPanel>drive</TabPanel>
            <TabPanel>dropbox</TabPanel>
            <TabPanel>facebook</TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Center>
  );
}

export default App;
