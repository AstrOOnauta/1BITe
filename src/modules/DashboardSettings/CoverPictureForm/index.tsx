/* eslint-disable no-return-assign */
import {
  Flex,
  FormLabel,
  Image,
  Stack,
  Text,
  theme,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdAddPhotoAlternate, MdDelete } from "react-icons/md";

import Button from "~/components/Form/Button";
import Input from "~/components/Form/Input";

interface CoverPictureFormProps {
  coverPicture: string;
  removePicture: (type: string) => void;
  onChangePicture: (file: File, type: string) => Promise<void>;
}

export default function CoverPictureForm({
  coverPicture,
  removePicture,
  onChangePicture,
}: CoverPictureFormProps) {
  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Stack>
      <Text fontWeight="semibold" color="blue.900">
        Foto de Capa
      </Text>
      {coverPicture ? (
        <Stack position="relative" w="100%">
          <FormLabel
            htmlFor="coverFileInput"
            cursor="pointer"
            title="Adicionar nova foto de capa do restaurante"
            width="100%"
            m={0}
          >
            <Image
              src={coverPicture}
              alt="foto de capa do restaurante"
              w="100%"
              aspectRatio={isMobileVersion ? "4/1" : "6/1"}
              objectFit="cover"
              borderRadius={8}
            />
          </FormLabel>
          <Button
            colorScheme="none"
            position="absolute"
            top={0}
            right={2}
            p={0}
            bg="red.500"
            borderRadius="full"
            size={isMobileVersion ? "sm" : "md"}
            boxShadow="md"
            title="Remover foto de capa do restaurante"
            onClick={() => removePicture("cover")}
          >
            <MdDelete
              size={isMobileVersion ? 20 : 24}
              color={theme.colors.green[50]}
            />
          </Button>
        </Stack>
      ) : (
        <FormLabel htmlFor="coverFileInput" cursor="pointer">
          <Flex
            w="100%"
            alignItems="center"
            justifyContent="center"
            bg="blue.50"
            borderRadius={8}
            title="Adicionar foto de capa para o restaurante"
            aspectRatio={isMobileVersion ? "4/1" : "6/1"}
          >
            <MdAddPhotoAlternate
              size={isMobileVersion ? 24 : 48}
              color={theme.colors.blue[900]}
            />
          </Flex>
        </FormLabel>
      )}
      <Input
        id="coverFileInput"
        type="file"
        accept=".png, .jpg, .jpeg"
        onClick={(e) => ((e.target as HTMLInputElement).value = "")}
        onChange={(e) => {
          if (e.target.files) {
            onChangePicture(e.target.files[0], "cover");
          }
        }}
        display="none"
      />
    </Stack>
  );
}
