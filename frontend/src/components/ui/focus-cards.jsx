// "use client";;
// import Image from "next/image";
// import React, { useState } from "react";
// import { cn } from "@/lib/utils";

// export const Card = React.memo(({
//   card,
//   index,
//   hovered,
//   setHovered
// }) => (
//   <div
//     onMouseEnter={() => setHovered(index)}
//     onMouseLeave={() => setHovered(null)}
//     className={cn(
//       "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
//       hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
//     )}>
//     <Image
//       src={card.src}
//       alt={card.title}
//       fill
//       className="object-cover absolute inset-0" />
//     <div
//       className={cn(
//         "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
//         hovered === index ? "opacity-100" : "opacity-0"
//       )}>
//       <div
//         className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
//         {card.title}
//       </div>
//     </div>
//   </div>
// ));

// Card.displayName = "Card";

// export function FocusCards({
//   cards
// }) {
//   const [hovered, setHovered] = useState(null);

//   return (
//     (<div
//       className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
//       {cards.map((card, index) => (
//         <Card
//           key={card.title}
//           card={card}
//           index={index}
//           hovered={hovered}
//           setHovered={setHovered} />
//       ))}
//     </div>)
//   );
// }
"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils";

export const Card = React.memo(({ member, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out"
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
