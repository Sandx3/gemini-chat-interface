import ReactMarkdown from "react-markdown";

function AIChatMarkdown({ children }) {
  return (
    <ReactMarkdown
      components={{
        pre: ({ node, ...props }) => (
          <div className="w-full max-w-full overflow-x-auto my-3 bg-gray-900 border border-gray-950 rounded-xl p-4 font-mono text-xs text-zinc-300 custom-scrollbar">
            <pre {...props} className="whitespace-pre" />
          </div>
        ),

        code: ({ node, ...props }) => (
          <code
            {...props}
            className="bg-gray-900 text-zinc-200 px-1.5 py-0.5 rounded font-mono text-[13px] break-words whitespace-pre-wrap"
          />
        ),
        ul: ({ node, ...props }) => (
          <ul
            {...props}
            className="list-disc list-inside my-2 pl-4 space-y-1 text-zinc-300"
          />
        ),

        ol: ({ node, ...props }) => (
          <ol
            {...props}
            className="list-decimal list-inside my-2 pl-4 space-y-1 text-zinc-300"
          />
        ),

        li: ({ node, ...props }) => (
          <li {...props} className="text-sm md:text-base leading-relaxed" />
        ),

        blockquote: ({ node, ...props }) => (
          <blockquote
            {...props}
            className="border-l-4 border-cyan-800 bg-zinc-800/30 pl-4 py-2 my-3 italic text-zinc-400 rounded-r-lg"
          />
        ),

        p: ({ node, ...props }) => (
          <p
            {...props}
            className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed"
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

export default AIChatMarkdown;
