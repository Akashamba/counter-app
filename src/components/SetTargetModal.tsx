import { Target } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ChangeEvent } from "react";

interface TargetModalProps {
  target: number;
  setTarget: React.Dispatch<React.SetStateAction<number>>;
}

export default function SetTargetModal({
  target,
  setTarget,
}: TargetModalProps) {
  const handleTargetChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Convert the string value to a number
    const value = e.target.value;

    // If empty input, either set to 0 or some default value
    if (value === "") {
      setTarget(0);
      return;
    }

    // Convert to number
    const numValue = Number(value);

    // Only update state if it's a valid number
    if (!isNaN(numValue)) {
      setTarget(numValue);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">
          <Target />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Set Target</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Target
            </Label>
            <Input
              id="target"
              type="number"
              onChange={handleTargetChange}
              value={target}
              className="col-span-3"
            />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div> */}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
