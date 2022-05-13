import React from "react";
import {
  Center,
  Container,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FiLink2 } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  url: yup
    .string()
    .url("Please enter a valid URL")
    .required("Please enter a URL"),
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
            <FormControl isInvalid={Boolean(form.formState.errors.url)}>
              <FormLabel htmlFor="url">URL</FormLabel>
              <InputGroup size="md">
                <Input
                  {...form.register("url")}
                  id="url"
                  placeholder="Enter a URL"
                />
                <InputRightElement>
                  <IconButton
                    type="submit"
                    size="md"
                    aria-label="Import"
                    icon={<FiLink2 size={16} />}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {form.formState.errors.url?.message}
              </FormErrorMessage>
            </FormControl>
          </form>
        </Container>
      )}
    </Center>
  );
}

export default LinkUploader;
