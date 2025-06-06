import { memo } from "react";

const Input = memo(({ prompt, setPrompt }) => {
  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <input
      type="text"
      name="prompt"
      id="prompt"
      placeholder="Enter a text prompt..."
      className="border-[.1rem] border-[var(--secondary-text-color)] outline-none px-4 py-1.5 rounded-md w-full placeholder:text-[var(--secondary-text-color)]"
      onChange={handleInputChange}
      autoComplete="off"
      value={prompt}
    />
  );
});

export default Input;
