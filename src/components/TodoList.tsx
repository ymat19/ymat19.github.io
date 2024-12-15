import { useState } from "react";
import { Center, Text, VStack, List, HStack } from "@chakra-ui/react";
import { TodoItem, Task } from "./TodoItem";
import { CreateTaskDialog } from "./CreateTaskDialog";

export function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const genClickDelete = (id: number) => {
    return () => {
      setTasks(tasks.filter((task) => task.id !== id));
    };
  };

  const genToggle = (id: number) => {
    return () => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        )
      );
    };
  };

  const max = (arr: number[]) => {
    return arr.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
  };

  const onCreateTask = (body: string) => {
    if (body === "") return;

    const newTask: Task = {
      id: max(tasks.map((task) => task.id)) + 1,
      title: body,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

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
            <TodoItem
              key={task.id}
              task={task}
              onClickDelete={genClickDelete(task.id)}
              onToggle={genToggle(task.id)}
            />
          ))}
        </List.Root>
        <HStack>
          <CreateTaskDialog onCreateTask={onCreateTask} />
        </HStack>
      </VStack>
    </Center>
  );
}
