// components/Button.js
import { ReactNode } from "react";
import Typography from "../Typography";

interface ButtonProps {
  href: string;
  children: ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function Button({
  href,
  children,
  size = "medium",
}: ButtonProps) {
  const sizeClasses = {
    small: "px-6 py-1",
    medium: "px-8 py-2",
    large: "px-10 py-3",
  };

  const typographyVariant: {
    [key in "small" | "medium" | "large"]: "bs" | "bm" | "bl";
  } = {
    small: "bs",
    medium: "bm",
    large: "bl",
  };

  return (
    <a href={href}>
      <button className={`bg-button w-fit rounded-md ${sizeClasses[size]}`}>
        <Typography
          as="span"
          variant={typographyVariant[size]}
          weight="medium"
          className="text-white"
        >
          {children}
        </Typography>
      </button>
    </a>
  );
}
