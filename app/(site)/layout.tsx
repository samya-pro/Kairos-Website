"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";

// Create a context for managing language
export const LanguageContext = React.createContext({
  language: "en",
  setLanguage: (language) => {},
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("en"); // Default language is English

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <html lang={language} suppressHydrationWarning>
        <body className={`dark:bg-black ${inter.className}`}>
          <ThemeProvider enableSystem={false} attribute="class" defaultTheme="dark">
            <Lines />
            <Header currentLanguage={language} toggleLanguage={toggleLanguage} />
            <ToasterContext />
            {children}
            <Footer currentLanguage={language} />
            <ScrollToTop />
          </ThemeProvider>
        </body>
      </html>
    </LanguageContext.Provider>
  );
}
