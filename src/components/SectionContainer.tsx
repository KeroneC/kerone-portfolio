import type { ReactNode } from "react";

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
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className={narrow ? "site-container-narrow" : "site-container"}>
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase text-[#9b6f20]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold text-[#22211f] sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-7 text-[#625f59]">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
