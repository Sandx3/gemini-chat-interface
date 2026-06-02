import { useState } from "react";
import OpenAI from "openai";

export const CHAT_ROLES = {
  user: "user",
  model: "assistant",
};

export default () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const ai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: import.meta.env.VITE_OPEN_ROUTER_API_KEY,
    dangerouslyAllowBrowser: true,
    defaultHeaders: {
      "HTTP-Referer": window.location.origin,
      "X-Title": "AI Chat Interface",
    },
  });

  const handleSendMessage = async (input) => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: CHAT_ROLES.user, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await ai.chat.completions.create({
        model: "openrouter/free",
        messages: [
          ...messages.map((m) => ({ role: m.role, content: m.content })),
          userMessage,
        ],
      });

      const responseText = response.choices[0].message.content;
      setMessages((prev) => [
        ...prev,
        { role: CHAT_ROLES.model, content: responseText },
      ]);
    } catch (error) {
      console.error("Error API:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: CHAT_ROLES.model,
          content: "An error occurred while connecting to Chat.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    handleSendMessage,
  };
};
