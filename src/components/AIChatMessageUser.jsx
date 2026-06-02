import AIChatMarkdown from "./AiChatMarkdown";

function AIChatMessageUser({ message }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] md:max-w-[75%] p-4 rounded-2xl shadow-sm bg-cyan-800 text-white rounded-br-none">
        <AIChatMarkdown>{message}</AIChatMarkdown>
      </div>
    </div>
  );
}

export default AIChatMessageUser;
