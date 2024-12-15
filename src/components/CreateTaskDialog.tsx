import { useRef, useState } from "react";
import { HStack, Input } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CreateTaskDialogProps {
  onCreateTask: (body: string) => void;
}

export const CreateTaskDialog: React.FC<CreateTaskDialogProps> = ({
  onCreateTask,
}) => {
  const [taskBody, setTaskBody] = useState<string>("");
  const saveRef = useRef<HTMLButtonElement | null>(null);

  const createTaskWithCleanup = (body: string) => {
    onCreateTask(body);
    setTaskBody("");
  };

  // https://zenn.dev/takky94/articles/f3096bb59761ee
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== "Enter") return;
    saveRef.current?.click();
  };

  return (
    <HStack wrap="wrap" gap="4">
      <DialogRoot placement="center" motionPreset="slide-in-bottom">
        <DialogTrigger asChild>
          <Button variant="outline">追加</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Input
              onChange={(event) => setTaskBody(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter task title"
            />
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogActionTrigger>
            <DialogActionTrigger asChild>
              <Button
                ref={saveRef}
                onClick={() => createTaskWithCleanup(taskBody)}
              >
                Save
              </Button>
            </DialogActionTrigger>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </HStack>
  );
};
