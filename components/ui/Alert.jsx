import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const alertVariants = cva(
  "px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl lg:text-2xl rounded-md shrink-0 flex justify-center gap-3 max-w-[728px]",
  {
    variants: {
      variant: {
        default: "bg-primary/50 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = ({ variant, className, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(alertVariants({ variant }), className)}
    />
  );
};

export { alertVariants, Alert };
