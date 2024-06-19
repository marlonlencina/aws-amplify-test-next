import React from "react";

interface CheckListProps {
  items: string[];
}

export default function CheckList({ items }: CheckListProps) {
  const leftColumnLimit = 6;
  const leftColumnItems = items.slice(0, leftColumnLimit);
  const rightColumnItems = items.slice(leftColumnLimit);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
      <div>
        {leftColumnItems.map((item, index) => (
          <div key={index} className="relative pl-6 mb-2">
            <span className="absolute left-0 text-white">✔</span>
            {item}
          </div>
        ))}
      </div>
      <div>
        {rightColumnItems.map((item, index) => (
          <div key={index} className="relative pl-6 mb-2">
            <span className="absolute left-0 text-white">✔</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
