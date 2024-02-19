"use client";
import React from "react";
import featuresDataEng from "./featuresDataEng";
import featuresDataFr from "./featuresDataFr";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = ( {currentLanguage} ) => {
  const featuresData = currentLanguage === 'en' ? featuresDataEng : featuresDataFr;
  
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="services" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          {currentLanguage === 'en' ?
            <SectionHeader
              headerInfo={{
                title: "OUR SERVICES",
                subtitle: `Core Services of `,
                company: `Ukiyo Digital`,
                description: `Seeking relief from cumbersome workflows, soaring expenses, and underwhelming customer experiences? You're in good company. 
                Countless clients overcame comparable obstacles with our bespoke AI solutions.`,
              }}
            /> :
            <SectionHeader
              headerInfo={{
              title: "NOS SERVICES",
              subtitle: `Principaux Services chez `,
              company: `Ukiyo Digital`,
              description: `Vous cherchez à vous libérer de flux de travail fastidieux, de dépenses en hausse et d'expériences client décevantes ? Vous n'êtes pas seul.
              De nombreux clients ont surmonté ces mêmes obstacles grâce à nos solutions d'IA personnalisées.`,
            }}
          />}
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
