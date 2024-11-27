import { useState } from "react";
import { Center, Text, VStack, List, HStack, Button } from "@chakra-ui/react";
import { TodoItem, Task } from "./TodoItem";

export function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  const onClickAdd = () => {
    const newTask: Task = {
      id: tasks.length,
      title: "sample task",
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  
  const genClickDelete = (id: number) => {
    return () => {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  }

  const genToggle = (id: number) => {
    return () => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        )
      );
    }
  }

  return (
    <Center h="100vh">
      <VStack
        w="80%"
        h="80%"
        padding={"40px 80px"}
        justifyContent="space-between"
        border="1px solid white"
        borderRadius="10px"
        gap={"20px"}
      >
        <Text fontSize="2xl" fontWeight="bold">
          TodoList
        </Text>
        <List.Root>
            {tasks.map((task) => (
                <TodoItem key={task.id} task={task} onClickDelete={genClickDelete(task.id)} onToggle={genToggle(task.id)} />
            ))}
        </List.Root>
        <HStack>
          <Button onClick={onClickAdd}>追加</Button>
        </HStack>
      </VStack>
    </Center>
  );
}
