import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  variant?: "primary" | "bordered";
  onClick?: () => void;
}
export default function Button({
  onClick,
  type = "button",
  variant = "primary",
  className,
  children = "button",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "border border-blue-500 rounded-full py-2 px-4 transition",
        variant === "primary" && "bg-blue-500 text-white hover:bg-blue-600",
        variant === "bordered" && "text-blue-500 hover:text-blue-600 hover:border-blue-600",
        className
      )}
    >
      {children}
    </button>
  );
}
