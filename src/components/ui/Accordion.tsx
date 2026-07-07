"use client";

import { useEffect, useId, useState } from "react";
import { Icon } from "./Icon";

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
              className="w-full flex items-center justify-between p-4 md:p-6 text-left gap-3"
            >
              <span className="text-body-md md:text-headline-sm font-semibold md:font-headline-sm text-primary pr-2 leading-snug">
                {item.question}
              </span>
              <Icon
                name="expand_more"
                className={`w-6 h-6 text-primary shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-4 md:px-6 pb-4 md:pb-6 text-body-md text-on-surface-variant border-t border-outline-variant/50 pt-3 md:pt-4 leading-relaxed"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
