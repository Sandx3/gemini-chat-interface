import AIChatMarkdown from "./AiChatMarkdown"

function AIChatMessageModel({ message }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] md:max-w-[75%] p-4 rounded-2xl shadow-sm bg-gray-700 text-white border border-gray-800 rounded-bl-none">
        <AIChatMarkdown>{message}</AIChatMarkdown>
      </div>
    </div>
  );
}

export default AIChatMessageModel;
