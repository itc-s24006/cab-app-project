"use client";

import { useState } from "react";
import { Button } from "flowbite-react";

type Props = {
  title?: string;
  onClick?: () => void;
};

type ChoiceButtonProps = {
  text: string;
};

export function LevelButton({ onStart }: { onStart: (level: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  const display_lv = [
    { label: "レベル1", value: "1" },
    { label: "レベル2", value: "2" },
    { label: "レベル3", value: "3" },
  ];

  return (
    <>
      {display_lv.map((level) => (
        <Button
          key={level.value}
          onClick={() => setSelected(level.value)}
          size="xl"
          className={
            selected === level.value
              ? "w-full max-w-sm mb-4 bg-blue-500 text-white"
              : "w-full max-w-sm mb-4 bg-light text-black border border-gray-300"
          }
        >
          {level.label}
        </Button>
      ))}

      <Button
        disabled={!selected}
        size="xl"
        color="blue"
        className="max-w-sm mt-5"
        onClick={() => selected && onStart(selected)}
      >
        試験開始
      </Button>
    </>
  );
}

export function ChoiceButton(props: ChoiceButtonProps) {
  return (
    <Button size="xl" color="light" className="w-full max-w-sm">
      {props.text}
    </Button>
  );
}

// export function DecideButton(props: Props) {
//   return (
//     <Button size="xl" color="blue" className="max-w-sm mt-5">
//       {props.title}
//     </Button>
//   );
// }

export function NextButton({ title, onClick }: Props) {
  return (
    <Button onClick={onClick} size="xl" color="blue" className="max-w-sm mt-5">
      {title}
    </Button>
  );
}
