import { useState, useEffect } from "react";
import { Center, VStack, Text } from "@chakra-ui/react";

export function Timer() {
  const now = new Date();
  const [time, setTime] = useState(now);

  const task = setInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    return () => {
      clearInterval(task);
    };
  });

  return (
    <Center h="100vh">
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
            {time.toLocaleTimeString()}
        </Text>
      </VStack>
    </Center>
  );
}
