import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function InternalLink(
  props: React.ComponentPropsWithRef<typeof Link> & {
    bordered?: boolean;
  },
) {
  return (
    <Link
      {...props}
      className={twMerge(
        "text-blue-500 hover:underline",
        props.bordered ? "px-3 py-2 border border-blue-500 rounded" : "",
        props.className,
      )}
    />
  );
}
