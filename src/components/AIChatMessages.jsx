import AIChatMessageModel from "./AIChatMessageModel";
import AIChatMessageUser from "./AIChatMessageUser";
import { CHAT_ROLES } from "../hooks/useAiChat";

function AIChatMessages({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto mb-6 space-y-4 pr-2 border border-gray-700 rounded-2xl p-4 ">
      {messages.map((message, i) =>
        message.role === CHAT_ROLES.user ? (
          <AIChatMessageUser
            key={`chat-mesage-${i}`}
            message={message.content}
          />
        ) : (
          <AIChatMessageModel
            key={`chat-mesage-${i}`}
            message={message.content}
          />
        ),
      )}
    </div>
  );
}

export default AIChatMessages;
