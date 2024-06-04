import { twMerge } from "tailwind-merge";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      className={twMerge(
        "px-2 py-1 text-white bg-blue-500 rounded",
        props.className,
      )}
    />
  );
}
