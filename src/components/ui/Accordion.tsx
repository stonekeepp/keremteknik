"use client";

import { useEffect, useId, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: FaqItem[];
  limit?: number;
};

export function Accordion({ items, limit }: AccordionProps) {
  const baseId = useId();
  const displayItems = limit ? items.slice(0, limit) : items;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {displayItems.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div
            key={item.question}
            className="bg-surface rounded-2xl shadow-level-1 overflow-hidden transition-shadow hover:shadow-level-2"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left"
            >
              <span className="text-headline-sm font-headline-sm text-primary pr-4">
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined text-primary shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 md:px-6 pb-5 md:pb-6 text-body-md text-on-surface-variant border-t border-outline-variant/50 pt-4"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
