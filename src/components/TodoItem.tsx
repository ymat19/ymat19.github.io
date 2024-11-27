import { Text, List, HStack } from "@chakra-ui/react";

export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}


interface TodoItemProps extends List.ItemProps {
  task: Task;
  onToggle: () => void;
  onClickDelete: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  task,
  onToggle,
  onClickDelete,
  ...props
}) => {
  return (
    <List.Item {...props} as={HStack} >
      <HStack>
        <Text
          textDecoration={task.isCompleted ? "line-through" : "none"}
          cursor="pointer"
          onClick={onToggle}
        >
          ・{task.title}
        </Text>
        <Text color="red" cursor="pointer" onClick={onClickDelete}>
          ❌
        </Text>
      </HStack>
    </List.Item>
  );
};
