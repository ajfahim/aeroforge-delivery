import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "px-6 py-3 text-base text-center font-semibold rounded-md shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary/80 focus:bg-primary/80",
        "outline-white": "border border-white text-white hover:bg-primary/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Button = ({ variant, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ variant }), className)}
    />
  );
};

export { buttonVariants, Button };
