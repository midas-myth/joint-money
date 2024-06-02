export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      className="block w-full px-3 py-2 border border-gray-300 rounded"
      {...props}
    />
  );
}
