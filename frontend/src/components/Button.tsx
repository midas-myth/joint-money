export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button className="px-2 py-1 text-white bg-blue-500 rounded" {...props} />
  );
}
