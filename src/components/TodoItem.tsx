import { Text, List, HStack } from "@chakra-ui/react";

interface TodoItemProps extends List.ItemProps {
  title: string;
  isCompleted: boolean;
  onToggle?: () => void;
  onClickDelete?: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  title,
  isCompleted,
  onToggle,
  onClickDelete,
  ...props
}) => {
  return (
    <List.Item {...props} as={HStack} >
      <HStack>
        <Text
          textDecoration={isCompleted ? "line-through" : "none"}
          cursor="pointer"
          onClick={onToggle}
        >
          ・{title}
        </Text>
        <Text color="red" cursor="pointer" onClick={onClickDelete}>
          ❌
        </Text>
      </HStack>
    </List.Item>
  );
};
