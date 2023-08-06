"use client";

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-plusplus */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-useless-escape */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable consistent-return */
import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import {
  AbsoluteCenter,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Image,
  InputGroup,
  InputRightElement,
  Text,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillFacebook,
  AiFillApple,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import Button from "~/components/Form/Button";
import Input from "~/components/Form/Input";

interface FormProps {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();
  const theme = useTheme();

  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  const isTabletVersion = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });

  function onSubmit(form: FormProps) {
    window.alert(`Bem-vindo novamente!`);
  }

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flex={1}
      bgImage={
        isMobileVersion
          ? "/images/wave-background-mobile.svg"
          : isTabletVersion
          ? "/images/wave-background-tablet.svg"
          : "/images/wave-background.svg"
      }
      bgRepeat="no-repeat"
      bgSize="cover"
      margin={-6}
    >
      <Flex
        w="100%"
        maxW={isTabletVersion ? "500px" : "1200px"}
        borderRadius={10}
        boxShadow="2xl"
        mx={6}
        my={10}
      >
        {isTabletVersion ? null : (
          <Image
            boxSize="700px"
            objectFit="cover"
            borderLeftRadius={10}
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80"
            alt="food image in background"
          />
        )}
        <Flex
          bg="green.50"
          borderRightRadius={10}
          borderLeftRadius={isTabletVersion ? 10 : 0}
          p={30}
          w="100%"
          maxW="500px"
          flexDirection="column"
          alignItems="center"
        >
          <Flex
            w="100%"
            flexDirection="column"
            alignItems="center"
            mt={4}
            mb={isMobileVersion ? 4 : 8}
          >
            <Text fontSize="2xl" fontWeight="bold">
              Bem-vindo de volta
            </Text>
            <Text>Entre com sua conta</Text>
          </Flex>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <Flex flexDirection="column" h="100%">
              <Flex w="100%" flexDirection="column">
                <Flex mb={4} w="100%" flexDirection="column">
                  <Text color="blue.900" fontWeight="bold">
                    E-mail
                  </Text>
                  <FormControl isInvalid={!!errors.email}>
                    <Input
                      placeholder="Digite seu e-mail"
                      {...register("email", {
                        required: "Campo necessário!",
                        pattern: {
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                          message: "Digite um e-mail válido!",
                        },
                      })}
                    />
                    {errors && errors.email ? (
                      <FormErrorMessage>
                        {errors.email?.message}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                </Flex>
                <Flex mb={2} w="100%" flexDirection="column">
                  <Text color="blue.900" fontWeight="bold">
                    Senha
                  </Text>
                  <FormControl isInvalid={!!errors.password}>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite sua senha"
                        {...register("password", {
                          required: "Campo necessário!",
                          minLength: {
                            value: 4,
                            message: "A senha deve ter pelo menos 4 dígitos!",
                          },
                        })}
                      />
                      <InputRightElement>
                        <Button
                          colorScheme="none"
                          p={0}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <AiOutlineEye
                              color={theme.colors.gray["900"]}
                              size={20}
                            />
                          ) : (
                            <AiOutlineEyeInvisible
                              color={theme.colors.blue["900"]}
                              size={20}
                            />
                          )}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    {errors && errors.password ? (
                      <FormErrorMessage>
                        {errors.password?.message}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                </Flex>
                <Flex justifyContent="flex-end">
                  <Link href="#">
                    <Text color="blue.900" fontWeight="semibold">
                      Esqueci a senha
                    </Text>
                  </Link>
                </Flex>
              </Flex>
              <Button
                w="100%"
                mt={10}
                type="submit"
                variant="solid"
                title="Entrar"
              />
            </Flex>
          </form>
          <Flex
            position="relative"
            w="100%"
            my={10}
            flex={1}
            flexDirection="column"
          >
            <Divider borderColor="blue.900" />
            <AbsoluteCenter px="4" top={0} bg="green.50" fontWeight="medium">
              Ou entre com
            </AbsoluteCenter>
            <Flex justifyContent="center" gap={4} mt={8}>
              <Button
                colorScheme="none"
                size="md"
                _hover={{ opacity: 0.8 }}
                _active={{ opacity: 0.4 }}
              >
                <FcGoogle size={48} />
              </Button>
              <Button
                colorScheme="none"
                size="md"
                _hover={{ opacity: 0.8 }}
                _active={{ opacity: 0.4 }}
              >
                <AiFillFacebook color="#3b5998" size={48} />
              </Button>
              <Button
                colorScheme="none"
                size="md"
                _hover={{ opacity: 0.8 }}
                _active={{ opacity: 0.4 }}
              >
                <AiFillApple color="#000000" size={48} />
              </Button>
            </Flex>
          </Flex>
          <Flex w="100%" justifyContent="center" mt={2}>
            <Text>Não tem uma conta?</Text>
            <Link href="/cadastro">
              <Text color="blue.900" fontWeight="bold" ml={1}>
                Criar conta
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
