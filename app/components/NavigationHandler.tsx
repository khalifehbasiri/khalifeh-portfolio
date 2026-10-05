"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { handleInitialScroll } from "../lib/navigation";

export function NavigationHandler() {
  const pathname = usePathname();
  useEffect(() => {
    handleInitialScroll();

    window.addEventListener("popstate", handleInitialScroll);

    return () => {
      window.removeEventListener("popstate", handleInitialScroll);
    };
  }, [pathname]);

  return null;
}
