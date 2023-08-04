/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable consistent-return */
import type { NextPage } from "next";
import Link from "next/link";
import {
  Box,
  Button,
  ButtonProps,
  Flex,
  Image,
  Input,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
  useBreakpointValue,
  useSteps,
} from "@chakra-ui/react";

interface IButton extends ButtonProps {
  title: string;
  isActive?: boolean;
}

const SignUp: NextPage = () => {
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

  function onSubmit() {
    console.log("HI");
    if (activeStep === 0) {
      return setActiveStep(1);
    }

    window.alert("Cadastrado");
  }

  function PrimaryButton({ title, isActive, ...props }: IButton) {
    return (
      <Button
        variant="solid"
        backgroundColor={isActive ? "blue.700" : "blue.900"}
        color="green.50"
        _hover={{
          backgroundColor: "blue.700",
        }}
        _active={{
          backgroundColor: "blue.900",
        }}
        {...props}
      >
        {title}
      </Button>
    );
  }

  function Step0() {
    return (
      <Flex w="100%" flexDirection="column" flex={1}>
        <Flex mb={4} w="100%" flexDirection="column">
          <Text color="blue.900" fontWeight="bold">
            E-mail
          </Text>
          <Input borderColor="blue.900" />
        </Flex>
        <Flex mb={4} w="100%" flexDirection="column">
          <Text color="blue.900" fontWeight="bold">
            Senha
          </Text>
          <Input borderColor="blue.900" />
        </Flex>
        <Flex mb={4} w="100%" flexDirection="column">
          <Text color="blue.900" fontWeight="bold">
            Confirmar senha
          </Text>
          <Input borderColor="blue.900" />
        </Flex>
      </Flex>
    );
  }

  function Step1() {
    return (
      <Flex w="100%" flexDirection="column" flex={1}>
        <Flex mb={4} w="100%" flexDirection="column">
          <Text color="blue.900" fontWeight="bold">
            Nome completo
          </Text>
          <Input borderColor="blue.900" />
        </Flex>
        <Flex mb={4} w="100%" flexDirection="column">
          <Text color="blue.900" fontWeight="bold">
            CPF
          </Text>
          <Input borderColor="blue.900" />
        </Flex>
        <Flex mb={4} w="100%" flexDirection="column">
          <Text color="blue.900" fontWeight="bold">
            Telefone
          </Text>
          <Input borderColor="blue.900" />
        </Flex>
      </Flex>
    );
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
      <Flex maxW="1200px" borderRadius={10} boxShadow="2xl" mx={6} my={10}>
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
            <Text>E desfruta de toda a nossa plataforma</Text>
          </Flex>
          <Box position="relative" w="40%" mt={12} mb={8}>
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
                    onClick={() => setActiveStep(Number(step.title) - 1)}
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
          {activeStep === 0 ? <Step0 /> : <Step1 />}
          <Flex w="100%" flexDirection="column" mt={10}>
            <PrimaryButton
              onClick={onSubmit}
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
      </Flex>
    </Flex>
  );
};

export default SignUp;
