"use client";

import Image from "next/image";
import { cn } from "../../../../utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "160s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((image) => (
          <li
            className="w-auto max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-auto bg-purple-800/50"
            key={image.id}
          >
            <blockquote>
              <div className="flex flex-col relative overflow-hidden items-center md:h-36 md:w-32 w-20 h-24 p-3 md:p-5" tabIndex="-1">
              {(image.name === 'Firebase' || image.name === 'Flask') ? <Image src={image.image} alt={image.name} className="w-16 h-16 mb-1 md:w-20 md:h-20" height={20} width={20} /> : <Image src={image.image} alt={image.name} className="w-16 h-16 md:w-20 md:h-20" height={20} width={20}/>}
                <p className="text-center md:text-xl text-md font-semibold mt-2 text-white">{image.name}</p>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
