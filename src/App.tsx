import { Minus, Plus, RotateCcw } from "lucide-react";
import CounterUI from "./components/CounterUI";
import Header from "./components/Header";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="h-screen max-w-sm mx-auto flex flex-col justify-between">
      <Header />
      <CounterUI target={128} currentCount={80} />
      <div className="flex justify-between">
        <Button className="rounded-full">
          <Minus />
        </Button>
        <Button className="rounded-full">
          <RotateCcw />
        </Button>
      </div>
      <Button className="h-1/3">
        <Plus />
      </Button>
    </div>
  );
}

export default App;
