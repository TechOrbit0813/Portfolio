"use client";

import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { BASE_PATH } from "@/lib/data";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type ChatApiResponse = {
  message?: string;
  error?: string;
};

const starterMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi, I’m Chris’s portfolio assistant. Ask me about his experience, technical skills, AI work, or project background.",
};

const suggestedQuestions = [
  "What kind of AI systems has Chris built?",
  "Which cloud platforms does Chris use?",
  "Summarize Chris’s full-stack experience.",
  "Which projects best show Chris’s experience?",
];

function makeMessageId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getChatEndpoint() {
  const configuredEndpoint = process.env.NEXT_PUBLIC_CHAT_API_URL?.trim();

  if (configuredEndpoint) {
    return configuredEndpoint;
  }

  return `${BASE_PATH}/api/chat` || "/api/chat";
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([starterMessage]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [hasUnreadMessage, setHasUnreadMessage] = useState(false);
  const messageListRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setHasUnreadMessage(false);
    window.setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    messageListRef.current?.scrollTo({
      top: messageListRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [isOpen, isSending, messages]);

  async function submitMessage(messageText: string) {
    const trimmedMessage = messageText.trim();

    if (!trimmedMessage || isSending) {
      return;
    }

    const userMessage: ChatMessage = {
      id: makeMessageId(),
      role: "user",
      content: trimmedMessage,
    };
    const requestMessages = [...messages, userMessage].slice(-12);

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch(getChatEndpoint(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: requestMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = (await response.json().catch(() => null)) as ChatApiResponse | null;

      if (!response.ok) {
        throw new Error(data?.error || "The portfolio assistant is temporarily unavailable.");
      }

      if (!data?.message) {
        throw new Error("The portfolio assistant returned an empty response.");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: makeMessageId(),
          role: "assistant",
          content: data.message as string,
        },
      ]);

      if (!isOpen) {
        setHasUnreadMessage(true);
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "The portfolio assistant is temporarily unavailable.";

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: makeMessageId(),
          role: "assistant",
          content: message,
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submitMessage(input);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void submitMessage(input);
    }
  }

  return (
    <div className="fixed bottom-5 right-4 z-[80] sm:bottom-6 sm:right-6">
      {isOpen ? (
        <section
          aria-label="Chris Geyer portfolio assistant"
          className="mb-3 flex h-[min(650px,calc(100vh-7rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/95 shadow-[0_24px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/95"
        >
          <header className="relative overflow-hidden bg-gradient-to-br from-brand via-brand-dark to-[#27187e] px-5 pb-4 pt-5 text-white">
            <div className="absolute -right-8 -top-12 h-32 w-32 rounded-full border border-white/15" />
            <div className="absolute -right-1 top-3 h-16 w-16 rounded-full bg-white/10 blur-xl" />

            <div className="relative flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-inner">
                  <i className="fas fa-robot text-lg" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-base font-semibold">Portfolio Assistant</h2>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-blue-100">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    Ask about Chris’s work
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white/80 transition hover:bg-white/15 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Close portfolio assistant"
              >
                <i className="fas fa-xmark" aria-hidden="true" />
              </button>
            </div>
          </header>

          <div
            ref={messageListRef}
            className="flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-slate-50 to-white px-4 py-5 dark:from-slate-950 dark:to-slate-900"
            aria-live="polite"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={
                    message.role === "user"
                      ? "max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-brand px-4 py-3 text-sm leading-6 text-white shadow-md shadow-blue-500/15"
                      : "max-w-[88%] whitespace-pre-wrap rounded-2xl rounded-bl-md border border-slate-200/80 bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  }
                >
                  {message.content}
                </div>
              </div>
            ))}

            {messages.length === 1 ? (
              <div className="grid gap-2 pt-1">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => void submitMessage(question)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left text-xs font-medium leading-5 text-slate-600 transition hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/30 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-brand/70 dark:hover:text-blue-300"
                  >
                    {question}
                  </button>
                ))}
              </div>
            ) : null}

            {isSending ? (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand" />
                  <span className="sr-only">Assistant is responding</span>
                </div>
              </div>
            ) : null}
          </div>

          <footer className="border-t border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <label htmlFor="portfolio-chat-message" className="sr-only">
                Ask the portfolio assistant
              </label>
              <textarea
                ref={inputRef}
                id="portfolio-chat-message"
                value={input}
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setInput(event.target.value)}
                onKeyDown={handleInputKeyDown}
                rows={1}
                maxLength={1200}
                placeholder="Ask about experience, projects, or skills…"
                className="max-h-28 min-h-11 flex-1 resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand/60 focus:bg-white focus:ring-4 focus:ring-brand/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-brand dark:focus:bg-slate-800"
              />
              <button
                type="submit"
                disabled={isSending || !input.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand text-white shadow-md shadow-blue-500/25 transition hover:-translate-y-0.5 hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 focus:outline-none focus:ring-4 focus:ring-brand/25"
                aria-label="Send message"
              >
                <i className="fas fa-paper-plane text-sm" aria-hidden="true" />
              </button>
            </form>
            <p className="mt-2 text-center text-[10px] leading-4 text-slate-400 dark:text-slate-500">
              AI-generated answers may need verification.
            </p>
          </footer>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group relative ml-auto flex h-15 w-15 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-brand to-brand-dark text-xl text-white shadow-[0_14px_35px_rgba(67,97,238,0.4)] transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(67,97,238,0.5)] focus:outline-none focus:ring-4 focus:ring-brand/25"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
      >
        <span className="absolute inset-0 rounded-[1.35rem] border border-white/25" />
        <i
          className={`fas ${isOpen ? "fa-xmark" : "fa-message"} relative transition-transform group-hover:scale-110`}
          aria-hidden="true"
        />
        {hasUnreadMessage ? (
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-400 dark:border-slate-950" />
        ) : null}
      </button>
    </div>
  );
}
