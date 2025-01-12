import { ButtonProps } from "@/interfaces";

function Button({ size, shape, children }: ButtonProps) {
  const sizes = {
    small: "py-2 px-4 bg-blue-600",
    medium: "py-3 px-8 bg-orange-500",
    large: "py-4 px-12 bg-red-600",
  };

  return (
    <button className={`${sizes[size]} ${shape} text-white mx-4`}>{children}</button>
  );
}

export default Button;
