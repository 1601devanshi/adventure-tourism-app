"use client";

import { useEffect, useState } from "react";

export default function CursorTrail() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-24 h-24 rounded-full bg-red-500/30 blur-3xl pointer-events-none z-[9999]"
      style={{
        left: mouse.x - 48,
        top: mouse.y - 48,
      }}
    />
  );
}