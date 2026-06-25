"use client";

import { useEffect, useState } from "react";
import { FaPlane } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [flying, setFlying] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 350);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    setFlying(true);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 250);

    setTimeout(() => {
      setFlying(false);
    }, 1600);
  };

  return (
    <>
      {flying && (
        <div className="flight-screen">
          <svg className="flight-svg" viewBox="0 0 1000 1000">
            <path
              className="flight-path"
              d="M920 880 C720 680, 520 640, 390 420 C270 220, 120 160, 60 70"
            />
          </svg>

          <FaPlane className="flying-plane" />
        </div>
      )}

      <button
        onClick={handleClick}
        className={`backtop-plane-btn ${show ? "show-plane-btn" : ""}`}
      >
        <span className="plane-label">Back To Top</span>
        <span className="plane-circle">
          <FaPlane />
        </span>
      </button>
    </>
  );
}