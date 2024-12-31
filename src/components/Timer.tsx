import { useState, useEffect } from "react";
import { Center, VStack, Text, HStack } from "@chakra-ui/react";
import { FaPlayCircle } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";

export function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const task = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return () => {
      clearInterval(task);
    };
  }, []);

  const OnStart = () => {
    setTimeLeft(10);
  };

  return (
    <Center h="95vh">
      <VStack
        w="80%"
        h="80%"
        padding={"40px 80px"}
        justifyContent="center"
        border="1px solid white"
        borderRadius="10px"
        gap={"20px"}
      >
        <Text fontSize="6xl" fontWeight="bold">
          {timeLeft}
        </Text>
        <HStack gap={"20px"}>
          <FaPlayCircle size={50} color="white" onClick={OnStart} />
          <CiPause1 size={50} color="white" />
          <GrPowerReset size={50} color="white" />
        </HStack>
      </VStack>
    </Center>
  );
}
