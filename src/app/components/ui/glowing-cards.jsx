"use client";
import { cn } from "../../../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid md:grid-cols-1 grid-cols-1 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block md:p-2 p-1 h-full md:w-9/12 w-full md:mx-auto"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-purple-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardDescription className='text-sm md:text-lg'>{item.description}</CardDescription>
            <div className="flex items-center mt-4">
              <div className="mr-2 items-center">
                <CardClientImage src={item.clientImage} alt={item.clientName} title={item.title} />
              </div>
              <div className="items-center">
                <CardTitle>{item.title}</CardTitle>
                <CardClientCountry country={item.clientCountry} flag={item.flagImage} />
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardClientImage = ({ src, alt, title }) => {
  if (src) {
    return (
      <div className="w-14 h-14 overflow-hidden rounded-full border-2 border-white dark:border-black">
        <Image src={src} alt={alt} className="w-full h-full object-cover" height={100} width={100} />
      </div>
    );
  } else {

    return (
      <div className="w-14 h-14 rounded-full bg-neutral-700 flex items-center justify-center text-xl font-semibold text-white">{title[0].toUpperCase()}</div>
    );
  }
};

export const CardClientCountry = ({ country, flag }) => {
  return (
    <div className="flex items-center mt-2 text-md text-gray-400">
      <div className="w-6 h-6 mt-2">{flag}</div>
      <p className="ml-1 items-center">{country}</p>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide text-lg", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-lg text-justify italic",
        className
      )}
    >
      {children}
    </p>
  );
};
