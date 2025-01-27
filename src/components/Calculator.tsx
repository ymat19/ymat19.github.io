import { Center, VStack, Text, Button, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export function Calculator() {
  const buttonsLabels: string[][] = [
    ["7", "8", "9", "÷"],
    ["4", "5", "6", "×"],
    ["1", "2", "3", "-"],
    ["0", "AC", "=", "+"],
  ];

  const [expression, setExpression] = useState<string>("");
  const createValidExpression = (expression: string) => {
    return expression.replace(/×/g, "*").replace(/÷/g, "/");
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const label = event.currentTarget?.textContent;
    if (label === "=") {
      try {
        if (expression)
          setExpression(eval(createValidExpression(expression)).toString());
      } catch (e) {
        alert(e);
      }
    } else if (label === "AC") {
      setExpression("");
    } else {
      setExpression(expression + label);
    }
  };

  return (
    <Center h="95vh">
      <VStack>
        <Text>Calculator</Text>
        <Input defaultValue={expression} placeholder="" />
        {buttonsLabels.map((labels) => (
          <HStack
            key={labels.join()}
            justify={"space-between"}
            margin={"4px 0px"}
          >
            {labels.map((label) => (
              <Button
                key={label}
                minWidth={"64px"}
                onClick={onClick}
                variant={"outline"}
              >
                {label}
              </Button>
            ))}
          </HStack>
        ))}
      </VStack>
    </Center>
  );
}
