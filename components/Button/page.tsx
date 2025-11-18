"use client";

import { Button } from "flowbite-react";

type Props = {
  title?: string;
};

export function LevelButton(props: Props) {
  return (
    <Button size="xl" color="light" className="w-full max-w-sm">
      {props.title}
    </Button>
  );
}

export function DecideButton(props: Props) {
  return (
    <Button size="xl" color="blue" className="w-full max-w-sm">
      {props.title}
    </Button>
  );
}
