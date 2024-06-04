const preventDefaultOnWheel = (node: HTMLInputElement) => {
  if (node !== null) {
    node.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
      },
      { passive: false },
    );
  }
};

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  return (
    <input
      ref={preventDefaultOnWheel}
      className="block w-full px-3 py-2 border border-gray-300 rounded"
      {...props}
    />
  );
}
