
"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils";

export const Card = React.memo(({ member, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-48 md:h-72 w-full transition-all duration-300 ease-out"
    )}
  >
    <img
      src={member.image}
      alt={member.name}
      className="object-cover absolute inset-0 w-full h-full"
    />
    {/* Hover overlay with name and designation */}
    <div
      className={cn(
        "absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-md mt-2">{member.role}</p>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ members }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {members.map((member, index) => (
        <Card
          key={member.name}
          member={member}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

export default FocusCards;
