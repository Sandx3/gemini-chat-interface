import AIChatMessages from "../../components/AIChatMessages";
import AIChatInput from "../../components/AIChatInput";
import useAiChat from "../../hooks/useAiChat";

function AIChat() {
  const { messages, isLoading, handleSendMessage } = useAiChat();

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4 md:p-6 select-none">
      <AIChatMessages messages={messages} />
      <AIChatInput handleSendMessage={handleSendMessage} />
    </div>
  );
}

export default AIChat;
