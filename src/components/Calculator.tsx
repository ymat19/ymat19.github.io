import { Text, Button, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";
export function Calculator() {
  const buttonsLabels: string[][] = [
    ["7", "8", "9", "÷"],
    ["4", "5", "6", "×"],
    ["1", "2", "3", "-"],
    ["0", "AC", "=", "+"],
  ];

  const [expression, setExpression] = useState<string>("");
  const onClickDefault = (event: React.MouseEvent<HTMLButtonElement>) => setExpression((value) => value + (event.currentTarget?.textContent || ""));

  return (
    <>
      <Text>Calculator</Text>
      <Input value={expression} placeholder="" />
      {buttonsLabels.map((labels) => (
        <HStack key={labels.join()} gap={"4px"} margin={"4px"}>
          {labels.map((label) => (
            <CalcButton
              key={label}
              label={label}
              onClick={label === "AC" ? (_: React.MouseEvent<HTMLButtonElement>) => setExpression("") : onClickDefault}
            />
          ))}
          <br />
        </HStack>
      ))}
    </>
  );
}

interface CalcButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CalcButton: React.FC<CalcButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <Button minWidth={"64px"} onClick={onClick}>
      {label}
    </Button>
  );
};
