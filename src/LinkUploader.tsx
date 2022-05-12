import React from "react";
import {
  Center,
  Container,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { FiLink2 } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  url: yup.string().url().required(),
});
const defaultValues = {
  url: "",
};

function LinkUploader() {
  const form = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const [imageSource, setimageSource] = React.useState("");

  const onSubmit = (data: { url: string }) => {
    setimageSource(data.url);
  };

  return (
    <Center height="100%">
      {imageSource ? (
        <Image src={imageSource} />
      ) : (
        <Container maxW="96">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <InputGroup size="md">
              <Input placeholder="Enter a URL" {...form.register("url")} />
              <InputRightElement>
                <IconButton
                  type="submit"
                  size="md"
                  aria-label="Import"
                  icon={<FiLink2 size={16} />}
                />
              </InputRightElement>
            </InputGroup>
          </form>
        </Container>
      )}
    </Center>
  );
}

export default LinkUploader;
