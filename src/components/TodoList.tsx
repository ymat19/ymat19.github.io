import { Center, Text, VStack, List } from "@chakra-ui/react";
import { TodoItem } from "./TodoItem";

export function TodoList() {
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
        <Text fontSize="2xl" fontWeight="bold">
          TodoList
        </Text>
        <List.Root>
            <TodoItem title="Todo1" isCompleted={false} />
            <TodoItem title="Todo2" isCompleted={true} />
            <TodoItem title="Todo3" isCompleted={false} />
        </List.Root>
      </VStack>
    </Center>
  );
}
