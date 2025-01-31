import { useState, useEffect } from "react";
import { Center, VStack, HStack } from "@chakra-ui/react";
import { FaPlayCircle } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import {
  NumberInputField,
  NumberInputRoot,
} from "@/components/ui/number-input";
import Sound from "../assets/timer.mp3";
import useSound from "use-sound";

export function Timer() {
  const defaultTime = 10;
  const [timeLeft, setTimeLeft] = useState(defaultTime);
  const [isRunning, setIsRunning] = useState(false);
  const [play] = useSound(Sound);

  useEffect(() => {
    const task = setInterval(() => {
      setTimeLeft((time) => {
        if (!isRunning) {
          return time;
        } else if (time <= 1) {
          play();
          setIsRunning(false);
          return 0;
        } else {
          return time - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(task);
    };
  }, [isRunning, play]);

  const OnReset = () => {
    setTimeLeft(defaultTime);
    setIsRunning(false);
  };

  return (
    <Center h="95vh">
      <VStack
        w="80%"
        h="80%"
        padding={"40px 80px"}
        justifyContent="center"
        border="1px solid white"
        borderRadius="10px"
        gap={"20px"}
      >
        <NumberInputRoot
          size="lg"
          defaultValue="10"
          value={timeLeft.toString()}
          onValueChange={(details) =>
            timeLeft !== details.valueAsNumber &&
            setTimeLeft(details.valueAsNumber)
          }
        >
          <NumberInputField />
        </NumberInputRoot>
        <HStack gap={"20px"}>
          {isRunning ? (
            <CiPause1
              size={50}
              color="white"
              onClick={() => setIsRunning(false)}
            />
          ) : (
            <FaPlayCircle
              size={50}
              color="white"
              onClick={() => setIsRunning(true)}
            />
          )}
          <GrPowerReset size={50} color="white" onClick={OnReset} />
        </HStack>
      </VStack>
    </Center>
  );
}
