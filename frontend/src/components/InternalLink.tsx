import { Link } from "react-router-dom";

export default function InternalLink(
  props: React.ComponentPropsWithRef<typeof Link>
) {
  return <Link className="text-blue-500" {...props} />;
}
