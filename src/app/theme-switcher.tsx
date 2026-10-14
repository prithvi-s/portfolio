"use client";

import { useEffect, useState } from "react";

const themes = ["auto", "light", "dark", "paper", "midnight", "forest", "terminal"];

export default function ThemeSwitcher() {
  const [active, setActive] = useState("auto");

  useEffect(() => {
    const root = document.documentElement;
    if (active === "auto") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", active);
  }, [active]);

  return (
    <div className="fixed right-4 bottom-4 flex flex-wrap gap-1 rounded-lg border border-border bg-background p-1 text-xs shadow-lg">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => setActive(t)}
          className={`rounded px-2 py-1 ${active === t ? "bg-accent text-background" : "text-muted hover:text-foreground"}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
