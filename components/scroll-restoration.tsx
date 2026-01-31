"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Don't restore if there's a hash in the URL (let browser handle anchor scrolling)
    const hash = window.location.hash;
    if (hash) {
      return;
    }

    // Small delay to let the page render first
    const timeoutId = setTimeout(() => {
      const savedPosition = sessionStorage.getItem(`scroll-${pathname}`);
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  useEffect(() => {
    // Save scroll position on scroll
    const handleScroll = () => {
      // Only save if no hash in URL
      if (!window.location.hash) {
        sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString());
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Save position when navigating away (only if no hash)
      if (!window.location.hash) {
        sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString());
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
}
