import { useState, useEffect } from "react";
import { Center, VStack, Text, HStack } from "@chakra-ui/react";
import { FaPlayCircle } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";

export function Timer() {
  const defaultTime = 10;
  const [timeLeft, setTimeLeft] = useState(defaultTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const task = setInterval(() => {
      setTimeLeft((time) => {
        if (isRunning && time > 0) {
          return time - 1;
        } else {
          return time;
        }
      });
    }, 1000);

    return () => {
      clearInterval(task);
    };
  }, [isRunning]);

  const OnStart = () => {
    setIsRunning(true);
  };

  const OnPause = () => {
    setIsRunning(!isRunning);
  };
  
  const OnReset = () => {
    setTimeLeft(defaultTime);
    setIsRunning(false);
  }


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
          {isRunning ? (
            <CiPause1 size={50} color="white" onClick={OnPause} />
          ) : (
            <FaPlayCircle size={50} color="white" onClick={OnStart} />
          )}
          <GrPowerReset size={50} color="white" onClick={OnReset} />
        </HStack>
      </VStack>
    </Center>
  );
}
