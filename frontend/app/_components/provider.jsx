"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

export function provider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
