"use client";

import { lazy, Suspense, useState } from "react";

const ChatWidget = lazy(() =>
  import("./chat-widget").then((module) => ({ default: module.ChatWidget }))
);

function ChatLauncher({ onOpen, busy = false }: { onOpen: () => void; busy?: boolean }) {
  return (
    <div className="fixed bottom-5 right-4 z-[80] sm:bottom-6 sm:right-6">
      <button
        type="button"
        onClick={onOpen}
        disabled={busy}
        className="group relative ml-auto flex h-15 w-15 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-brand to-brand-dark text-xl text-white shadow-[0_14px_35px_rgba(67,97,238,0.4)] transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(67,97,238,0.5)] focus:outline-none focus:ring-4 focus:ring-brand/25 disabled:cursor-wait"
        aria-expanded="false"
        aria-label="Open portfolio assistant"
        aria-busy={busy}
      >
        <span className="absolute inset-0 rounded-[1.35rem] border border-white/25" />
        <i className="fas fa-message relative transition-transform group-hover:scale-110" aria-hidden="true" />
      </button>
    </div>
  );
}

export function LazyChatWidget() {
  const [loadChat, setLoadChat] = useState(false);

  if (!loadChat) {
    return <ChatLauncher onOpen={() => setLoadChat(true)} />;
  }

  return (
    <Suspense fallback={<ChatLauncher onOpen={() => {}} busy />}>
      <ChatWidget initiallyOpen />
    </Suspense>
  );
}
