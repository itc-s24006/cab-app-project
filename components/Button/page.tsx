"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";

type Props = {
  onClick?: () => void;
  className?: string;
};

type ChoiceButtonProps = {
  onClick?: () => void;
  text: string;
  isSelected?: boolean;
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

export function ChoiceButton({ text, onClick, isSelected }: ChoiceButtonProps) {
  const base = "max-w-sm text-left";
  const selectedClass = isSelected
    ? "w-full bg-blue-500 text-white hover:bg-blue-600"
    : "w-full bg-light text-black";
  return (
    <Button
      size="xl"
      color="light"
      className={`${base} ${selectedClass}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export function NextButton({ onClick, className }: Props) {
  return (
    <Button
      onClick={onClick}
      size="xl"
      color="blue"
      className={`w-full ${className ?? ""}`}
    >
      次へ
    </Button>
  );
}

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/")}
      size="xl"
      color="light"
      className={`w-full ${className ?? ""}`}
    >
      レベル選択に戻る
    </Button>
  );
}
