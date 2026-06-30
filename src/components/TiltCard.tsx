"use client";

import React, { useRef } from "react";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number;
  scale?: number;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  scale = 1.02,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const x = (mouseX - width / 2) / (width / 2);
    const y = (mouseY - height / 2) / (height / 2);

    const rotateX = -y * maxTilt;
    const rotateY = x * maxTilt;

    // Direct DOM styling for maximum 60fps/120fps performance (bypassing React re-renders)
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    card.style.transition = "transform 0.08s ease-out";

    if (glare) {
      glare.style.opacity = "1";
      glare.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, color-mix(in srgb, var(--color-accent) 15%, transparent), transparent 70%)`;
      glare.style.transition = "opacity 0.08s ease-out";
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card) return;

    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    card.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";

    if (glare) {
      glare.style.opacity = "0";
      glare.style.transition = "opacity 0.4s ease";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden style-3d ${className}`}
      style={{
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      {...props}
    >
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          opacity: 0,
          background: "radial-gradient(circle at 0px 0px, color-mix(in srgb, var(--color-accent) 12%, transparent), transparent 70%)",
          transition: "opacity 0.4s ease",
        }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
