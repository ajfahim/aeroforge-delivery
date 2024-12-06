"use client";
import { useState, useRef } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(
  "px-4 py-3 text-base rounded-md border-[#D6D6D9] flex items-center gap-2 [&:focus-within_svg]:stroke-black",
  {
    variants: {
      variant: {
        default: "bg-white text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Input = ({
  variant,
  className,
  type,
  id,
  setData,
  children,
  ...props
}) => {
  const [input, setInput] = useState();
  const inputRef = useRef();
  const handleInput = () => {
    setInput(inputRef.current.value);
    setData((data) => ({ ...data, [id]: inputRef.current.value }));
  };

  return (
    <div className={twMerge(inputVariants({ variant }), className)}>
      {children}
      <input
        {...props}
        type={type}
        ref={inputRef}
        className="outline-none flex-1 placeholder-[#a3a5a9]"
        onChange={handleInput}
        id="email"
      />
    </div>
  );
};

export { inputVariants, Input };
