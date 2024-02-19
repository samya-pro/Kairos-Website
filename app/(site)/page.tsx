"use client";

import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Founders from "@/components/Founders";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

import { useContext } from 'react';
import { LanguageContext } from './layout';

const metadata: Metadata = {
  title: "Ukiyo Digital | Empowering Businesses with A.I. Solutions",
  description: "This is Home for Ukiyo Digital",
  // other metadata
};

export default function Home() {
  const { language } = useContext(LanguageContext);

  return (
    <main>
      <Hero currentLanguage={language} />
      <Brands />
      <Feature currentLanguage={language} />
      <About currentLanguage={language} />
      <FeaturesTab currentLanguage={language} />
      <FunFact currentLanguage={language} />
      <Integration currentLanguage={language} />
      <CTA currentLanguage={language} />
      <Founders currentLanguage={language} />
      {/*<FAQ />*/}
      <Testimonial currentLanguage={language} />
      {/*<Pricing />*/}
      <Contact currentLanguage={language} />
      <br />
      {/*<Blog />*/}
    </main>
  );
}
