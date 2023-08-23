"use client";

/* eslint-disable no-plusplus */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-useless-escape */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable consistent-return */
import { useCallback, useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Image,
  InputGroup,
  InputRightElement,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
  useBreakpointValue,
  useSteps,
  useTheme,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import Button from "~/components/Form/Button";
import Input from "~/components/Form/Input";
import { brPhoneNumberMask, cpfMask } from "~/shared/utils/inputMasks";

interface FormProps {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  cpf: string;
  phoneNumber: string;
}

interface ShowProps {
  password: boolean;
  confirmPassword: boolean;
}

const SignUp: NextPage = () => {
  const [show, setShow] = useState<ShowProps>({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<FormProps>();
  const theme = useTheme();

  const steps = [
    { title: "1", description: "" },
    { title: "2", description: "" },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

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
    if (activeStep === 0) {
      return setActiveStep(1);
    }

    window.alert(`Olá ${form.name}, seja bem-vindo!`);
  }

  const Step0 = useCallback(() => {
    return (
      <Flex w="100%" flexDirection="column" flex={1}>
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
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            ) : null}
          </FormControl>
        </Flex>
        <Flex mb={4} w="100%" flexDirection="column">
          <Text color="blue.900" fontWeight="bold">
            Senha
          </Text>
          <FormControl isInvalid={!!errors.password}>
            <InputGroup>
              <Input
                type={show.password ? "text" : "password"}
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
                  onClick={() => setShow({ ...show, password: !show.password })}
                >
                  {show.password ? (
                    <AiOutlineEye color={theme.colors.gray["900"]} size={20} />
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
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            ) : null}
          </FormControl>
        </Flex>
        <Flex mb={4} w="100%" flexDirection="column">
          <Text color="blue.900" fontWeight="bold">
            Confirmar senha
          </Text>
          <FormControl isInvalid={!!errors.confirmPassword}>
            <InputGroup>
              <Input
                type={show.confirmPassword ? "text" : "password"}
                placeholder="Confirme sua senha"
                {...register("confirmPassword", {
                  required: "Campo necessário!",
                  validate: (value) => {
                    const { password } = getValues();
                    return password === value || "As senhas não são iguais!";
                  },
                })}
              />
              <InputRightElement>
                <Button
                  colorScheme="none"
                  p={0}
                  onClick={() =>
                    setShow({ ...show, confirmPassword: !show.confirmPassword })
                  }
                >
                  {show.confirmPassword ? (
                    <AiOutlineEye color={theme.colors.blue["900"]} size={20} />
                  ) : (
                    <AiOutlineEyeInvisible
                      color={theme.colors.blue["900"]}
                      size={20}
                    />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors && errors.confirmPassword ? (
              <FormErrorMessage>
                {errors.confirmPassword?.message}
              </FormErrorMessage>
            ) : null}
          </FormControl>
        </Flex>
      </Flex>
    );
  }, [errors, show]);

  const Step1 = useCallback(() => {
    return (
      <Flex w="100%" flexDirection="column" flex={1}>
        <Flex mb={4} w="100%" flexDirection="column">
          <Text color="blue.900" fontWeight="bold">
            Nome completo
          </Text>
          <FormControl isInvalid={!!errors.name}>
            <Input
              placeholder="Digite seu nome completo"
              autoCapitalize="words"
              {...register("name", { required: "Campo necessário!" })}
            />
            {errors && errors.name ? (
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            ) : null}
          </FormControl>
        </Flex>
        <Flex mb={4} w="100%" flexDirection="column">
          <Text color="blue.900" fontWeight="bold">
            CPF
          </Text>
          <FormControl isInvalid={!!errors.cpf}>
            <Input
              placeholder="Digite seu CPF"
              {...register("cpf", {
                required: "Campo necessário!",
                minLength: {
                  value: 14,
                  message: "O cpf deve ter pelo menos 11 dígitos!",
                },
                onChange: (e) => setValue("cpf", cpfMask(e.target.value)),
              })}
            />
            {errors && errors.cpf ? (
              <FormErrorMessage>{errors.cpf?.message}</FormErrorMessage>
            ) : null}
          </FormControl>
        </Flex>
        <Flex mb={4} w="100%" flexDirection="column">
          <Text color="blue.900" fontWeight="bold">
            Telefone
          </Text>
          <FormControl isInvalid={!!errors.phoneNumber}>
            <Input
              placeholder="Digite seu número para contato"
              {...register("phoneNumber", {
                required: "Campo necessário!",
                minLength: {
                  value: 13,
                  message: "O telefone deve ter 11 dígitos!",
                },
                onChange: (e) =>
                  setValue("phoneNumber", brPhoneNumberMask(e.target.value)),
              })}
            />
            {errors && errors.phoneNumber ? (
              <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
            ) : null}
          </FormControl>
        </Flex>
      </Flex>
    );
  }, [errors]);

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
            src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=480&q=80"
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
          <Flex w="100%" flexDirection="column" alignItems="center" mt={4}>
            <Text fontSize="2xl" fontWeight="bold">
              Cadastre-se
            </Text>
            <Text>E desfrute de toda a nossa plataforma</Text>
          </Flex>
          <Box
            position="relative"
            w={isMobileVersion ? "60%" : "40%"}
            mt={isMobileVersion ? 6 : 12}
            mb={isMobileVersion ? 4 : 8}
          >
            <Stepper
              size="md"
              index={activeStep}
              gap="0"
              colorScheme="whatsapp"
            >
              {steps.map((step) => (
                <Step key={step.title}>
                  <Button
                    colorScheme="none"
                    p={0}
                    size="md"
                    cursor={
                      step.title === "2" && activeStep === 0
                        ? "not-allowed"
                        : "pointer"
                    }
                    onClick={() => {
                      if (step.title === "1") {
                        setActiveStep(Number(step.title) - 1);
                      }
                    }}
                  >
                    <StepIndicator bg="green.50">
                      <StepStatus
                        complete={step.title}
                        incomplete={<Text color="gray.300">{step.title}</Text>}
                        active={<Text color="blue.900">{step.title}</Text>}
                      />
                    </StepIndicator>
                  </Button>
                  <Box w="100%" ml={-6}>
                    <StepSeparator />
                  </Box>
                </Step>
              ))}
            </Stepper>
          </Box>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "100%", flex: 1 }}
          >
            <Flex flexDirection="column" h="100%">
              {activeStep === 0 ? <Step0 /> : <Step1 />}
              <Flex w="100%" flexDirection="column" mt={10}>
                <Button
                  type="submit"
                  variant="solid"
                  title={activeStep === 0 ? "Próximo" : "Cadastrar"}
                />
                <Flex w="100%" justifyContent="center" mt={2}>
                  <Text>Já tenho uma conta!</Text>
                  <Link href="/entrar">
                    <Text color="blue.900" fontWeight="bold" ml={1}>
                      Entrar
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUp;
