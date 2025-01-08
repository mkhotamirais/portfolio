import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  bg?: string;
  className?: string;
}

export default function Section({ children, id = "home", bg = "bg-white", className }: SectionProps) {
  return (
    <section id={id} className={`${bg} min-h-[30vh] scroll-mt-16 py-10 lg:py-16`}>
      <div className={`container h-full ${className}`}>{children}</div>
    </section>
  );
}
