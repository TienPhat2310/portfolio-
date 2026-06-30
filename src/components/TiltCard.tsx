"use client";

import React, { useRef, useState } from "react";

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
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
  });
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({
    opacity: 0,
    background: "radial-gradient(circle at 0px 0px, color-mix(in srgb, var(--color-accent) 12%, transparent), transparent 70%)",
    transition: "opacity 0.5s ease",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
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

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: "transform 0.1s ease-out",
    });

    setGlareStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, color-mix(in srgb, var(--color-accent) 15%, transparent), transparent 70%)`,
      transition: "opacity 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    });

    setGlareStyle({
      opacity: 0,
      background: "radial-gradient(circle at 0px 0px, color-mix(in srgb, var(--color-accent) 12%, transparent), transparent 70%)",
      transition: "opacity 0.5s ease",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className={`relative overflow-hidden style-3d ${className}`}
      {...props}
    >
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={glareStyle}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
