import { useState } from "react";

function AIChatInput({ handleSendMessage, isLoading }) {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length > 0) {
      handleSendMessage(input);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-5"
    >
      <input
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={input}
        name="AI-chat-input"
        disabled={isLoading}
        placeholder="Ask AI"
        className="w-full border border-gray-700 text-white placeholder-gray-500 rounded-xl py-4 pl-5 pr-16 focus:outline-none focus:border-cyan-800 focus:ring-1 focus:ring-cyan-800 transition-all text-sm md:text-base"
      />
      <button
        className="flex items-center justify-center cursor-pointer text-white hover:text-cyan-900 transition-all"
        type="submit"
        disabled={isLoading || !input.trim()}
      >
        Send
      </button>
    </form>
  );
}

export default AIChatInput;
