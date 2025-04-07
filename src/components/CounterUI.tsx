import { Target } from "lucide-react";

interface CounterUIProps {
  target: number;
  currentCount: number;
}

export default function CounterUI({ target, currentCount }: CounterUIProps) {
  return (
    <div className="h-1/2 aspect-square rounded-full bg-[#9C9C9C] flex flex-col justify-center items-center">
      <div className="target text-[#444343] flex gap-1">
        <Target /> {target}
      </div>
      <div className="current-count text-9xl text-[#f5f5f5]">
        {currentCount}
      </div>
    </div>
  );
}
