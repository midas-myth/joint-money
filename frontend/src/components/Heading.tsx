export default function Heading(
  props: React.HTMLAttributes<HTMLHeadingElement>
) {
  return (
    <h1
      className="block text-3xl font-bold leading-tight text-gray-900"
      {...props}
    />
  );
}
