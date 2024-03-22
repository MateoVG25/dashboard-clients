import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  duration = 1,
  textSize = "text-2xl",
}: {
  words: string;
  className?: string;
  duration?: number;
  textSize?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  const animateRef = useRef(animate);
  animateRef.current = animate;

  useEffect(() => {
    animateRef.current(
      "span",
      {
        opacity: 1,
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [duration]); // La matriz de dependencias no incluye 'animate'

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className={cn(
            " dark:text-white text-black leading-snug tracking-wide",
            textSize
          )}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
