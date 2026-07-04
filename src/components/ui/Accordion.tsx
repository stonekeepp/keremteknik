"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: FaqItem[];
  limit?: number;
};

export function Accordion({ items, limit }: AccordionProps) {
  const displayItems = limit ? items.slice(0, limit) : items;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {displayItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="bg-surface rounded-xl shadow-level-1 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="text-headline-sm font-headline-sm text-primary pr-4">
                {item.question}
              </span>
              <span className="material-symbols-outlined text-primary shrink-0">
                {isOpen ? "expand_less" : "expand_more"}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-body-md text-on-surface-variant border-t border-outline-variant pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
