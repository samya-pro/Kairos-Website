"use client";
import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

import { useContext } from 'react';
import { LanguageContext } from '../layout';

const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="pb-20 pt-40">
      <Contact currentLanguage={language} />
    </div>
  );
};

export default SupportPage;
