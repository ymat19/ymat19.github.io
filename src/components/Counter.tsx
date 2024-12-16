import { useState } from "react";
import { Box, VStack, Text, Center } from "@chakra-ui/react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Center h="95vh">
      <VStack
        w="auto"
        h="auto"
        padding={'40px 80px'}
        justifyContent="center"
        border="1px solid white"
        borderRadius="10px"
        gap={'20px'}
      >
        <Text fontSize="8xl" fontWeight="bold">
          {count}
        </Text>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <button onClick={() => setCount(count + 1)}>
            <Text fontSize="6xl" fontWeight="bold">
              +
            </Text>
          </button>
          <button onClick={() => setCount(count - 1)}>
            <Text fontSize="6xl" fontWeight="bold">
              -
            </Text>
          </button>
        </Box>
      </VStack>
    </Center>
  );
}
