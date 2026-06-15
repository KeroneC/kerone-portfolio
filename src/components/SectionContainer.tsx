import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionContainerProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function SectionContainer({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  narrow = false,
}: SectionContainerProps) {
  return (
    <section id={id} className={`py-[4.5rem] sm:py-24 ${className}`}>
      <div className={narrow ? "site-container-narrow" : "site-container"}>
        {(eyebrow || title || description) && (
          <Reveal className="mb-11 max-w-3xl">
            {eyebrow && (
              <p className="eyebrow mb-3">{eyebrow}</p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold leading-tight text-[#22211f] sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-7 text-[#625f59]">
                {description}
              </p>
            )}
          </Reveal>
        )}
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
