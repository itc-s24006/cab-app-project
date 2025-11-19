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

const display_lv = ["レベル1", "レベル2", "レベル3"];

export function LevelButton({ onStart }: { onStart: (level: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      {display_lv.map((level, index) => (
        <Button
          key={level}
          onClick={() => setSelected(level)}
          size="xl"
          color={selected === level ? "blue" : "light"}
          className="w-full max-w-sm mb-4"
        >
          {level}
        </Button>
      ))}

      <Button
        color="success"
        disabled={!selected}
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
