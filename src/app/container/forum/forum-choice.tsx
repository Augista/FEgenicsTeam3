"use client"
import Typography from "@/components/Typography";
import ButtonNoLink from "@/components/button/ButtonNoLink";
import { useState } from "react";

interface ForumChoiceProps {
  title: string;
  choices: string[];
}

export default function ForumChoice({ title = "Judul", choices = [] }: ForumChoiceProps) {
  const [choose, setChoose] = useState<string | null>(null);

  const handleClick = (choice: string) => {
    setChoose(choice);
  }

  return (
    <div className="w-full ">
      <Typography variant="h4" weight="semibold">{title}</Typography>
      <div>
        {choices.map((choice, index) => (
          <ButtonNoLink onClick={() => handleClick(choice)} key={index} size="large" variant={choice === choose ? "primary" : "outline"}>{choice}</ButtonNoLink>
        ))}
      </div>
    </div>
  );
}
