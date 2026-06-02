import { useState } from "react";

function AIChatInput({ handleSendMessage }) {
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
    <div className="flex items-center justify-center gap-5">
      <input
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={input}
        name="AI-chat-input"
      />
      <button type="submit" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}

export default AIChatInput;
