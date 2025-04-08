import { useEffect, useState } from "react";
import { Minus, Plus, RotateCcw, Target } from "lucide-react";
import CounterUI from "./components/CounterUI";
import Header from "./components/Header";
import { Button } from "./components/ui/button";
import SetTargetModal from "./components/SetTargetModal";

function App() {
  const [currentCount, setCurrentCount] = useState<number>(0);
  const [target, setTarget] = useState<number>(0);
  const [disableIncrement, setDisableIncrement] = useState<boolean>(false);
  const [disableDecrement, setDisableDecrement] = useState<boolean>(true);

  const handleIncrementCount = () => {
    const audio = new Audio("/audiomass-type.mp3"); // If it's in public/
    audio.play();
    setCurrentCount((currentCount) => {
      return currentCount + 1;
    });
  };

  const handleDecrementCount = () => {
    const audio = new Audio("/audiomass-backspace.mp3"); // If it's in public/
    audio.play();
    setCurrentCount((currentCount) => currentCount - 1);
  };

  const handleResetCount = () => {
    // TODO: Modal to confirm reset
    setCurrentCount(0);
  };

  useEffect(() => {
    if (currentCount == 0) {
      setDisableDecrement(true);
    } else {
      setDisableDecrement(false);
    }
    if (currentCount >= target) setDisableIncrement(true);
    else setDisableIncrement(false);
  }, [currentCount, target]);

  useEffect(() => {
    setCurrentCount(0);
  }, [target]);

  return (
    <div className="h-screen max-w-sm mx-auto flex flex-col justify-between">
      <Header />
      <CounterUI target={target} currentCount={currentCount} />
      <div className="flex justify-between">
        <Button
          disabled={disableDecrement}
          onClick={handleDecrementCount}
          className="rounded-full"
        >
          <Minus />
        </Button>

        <SetTargetModal target={target} setTarget={setTarget} />
        <Button
          disabled={disableDecrement}
          onClick={handleResetCount}
          className="rounded-full"
        >
          <RotateCcw />
        </Button>
      </div>
      <Button
        disabled={disableIncrement}
        onClick={handleIncrementCount}
        className="h-1/3"
      >
        <Plus />
      </Button>
    </div>
  );
}

export default App;
