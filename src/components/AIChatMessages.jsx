import { useRef, useEffect } from "react";

import AIChatMessageModel from "./AIChatMessageModel";
import AIChatMessageUser from "./AIChatMessageUser";
import AIChatLoader from "./AIChatLoader";
import { CHAT_ROLES } from "../hooks/useAiChat";

function AIChatMessages({ messages, isLoading }) {
  const scrollToBottomAnchor = useRef(null);

  useEffect(() => {
    scrollToBottomAnchor.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
      {isLoading && <AIChatLoader />}
      <div ref={scrollToBottomAnchor} />
    </div>
  );
}

export default AIChatMessages;
