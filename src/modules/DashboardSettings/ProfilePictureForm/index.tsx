/* eslint-disable sonarjs/cognitive-complexity */
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

interface ProfilePictureFormProps {
  profilePicture: string;
  removePicture: (type: string) => void;
  onChangePicture: (file: File, type: string) => Promise<void>;
}

export default function ProfilePictureForm({
  profilePicture,
  removePicture,
  onChangePicture,
}: ProfilePictureFormProps) {
  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  const isTabletVersion = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });

  return (
    <Stack marginRight={isMobileVersion ? 0 : 4}>
      <Text fontWeight="semibold" color="blue.900">
        Foto de Perfil
      </Text>
      {profilePicture ? (
        <Stack
          position="relative"
          boxSize={isMobileVersion ? 120 : isTabletVersion ? 200 : 240}
        >
          <FormLabel
            htmlFor="profileFileInput"
            cursor="pointer"
            title="Adicionar nova foto de perfil do restaurante"
            width="100%"
            m={0}
          >
            <Image
              src={profilePicture}
              alt="foto de pefil do restaurante"
              boxSize={isMobileVersion ? 120 : isTabletVersion ? 200 : 240}
              objectFit="cover"
              borderRadius={8}
              m={0}
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
            title="Remover foto de perfil do restaurante"
            onClick={() => removePicture("profile")}
          >
            <MdDelete
              size={isMobileVersion ? 20 : 24}
              color={theme.colors.green[50]}
            />
          </Button>
        </Stack>
      ) : (
        <FormLabel htmlFor="profileFileInput" cursor="pointer">
          <Flex
            boxSize={isMobileVersion ? 120 : isTabletVersion ? 200 : 240}
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
        id="profileFileInput"
        type="file"
        accept=".png, .jpg, .jpeg"
        onClick={(e) => ((e.target as HTMLInputElement).value = "")}
        onChange={(e) => {
          if (e.target.files) {
            onChangePicture(e.target.files[0], "profile");
          }
        }}
        display="none"
      />
    </Stack>
  );
}
