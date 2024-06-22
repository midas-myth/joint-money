import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function InternalLink({
  bordered,
  className,
  ...restProps
}: React.ComponentPropsWithRef<typeof Link> & {
  bordered?: boolean;
}) {
  return (
    <Link
      {...restProps}
      className={twMerge(
        "text-blue-500 hover:underline",
        bordered ? "px-3 py-2 border border-blue-500 rounded" : "",
        className,
      )}
    />
  );
}
