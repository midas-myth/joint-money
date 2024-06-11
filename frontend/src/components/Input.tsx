const preventDefaultOnWheel = (node: HTMLInputElement) => {
  if (node !== null) {
    const inputType = node.getAttribute("type");

    if (inputType !== "number") {
      return;
    }

    node.addEventListener(
      "wheel",
      (e) => {
        const isFocused = document.activeElement === node;
        if (!isFocused) {
          return;
        }
        e.preventDefault();
        scrollBy(e.deltaX, e.deltaY);
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
