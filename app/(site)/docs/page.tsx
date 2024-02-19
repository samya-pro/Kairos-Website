"use client";
import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

import { useContext } from 'react';
import { LanguageContext } from '../layout';

const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default function DocsPage() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                  {language === 'en' ? `Welcome to` : `Bienvenue chez`} {"   "}
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                    Ukiyo Digital
                  </span>
                </h1>

                {language === 'en' ? (
                  <>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      Ukiyo Digital stands at the forefront of innovation, dedicated to revolutionizing businesses through cutting-edge AI solutions. 
                      Founded by a team of seasoned experts with diverse backgrounds and unwavering ambition, we are driven by a relentless pursuit 
                      of excellence and a passion for pushing boundaries. Our comprehensive suite of services encompasses AI chatbots, e-commerce product 
                      recommendations, lead capture and generation, real estate property management and recommendations, AI personal trainer buddies, custom GPTs, 
                      automated customer support, and more. Each solution is meticulously crafted to cater to the unique needs of our clients, empowering them to 
                      streamline operations, enhance productivity, and stay ahead in today's dynamic marketplace.
                    </p>

                    <p>
                      At Ukiyo Digital, we prioritize customer success above all else. With a commitment to transparency, collaboration, and innovation, we work 
                      closely with our clients to understand their business objectives and deliver tailored solutions that drive tangible results. Through our 
                      streamlined processes, effective solutions, and user-friendly automation tools, we simplify complex tasks, optimize workflows, and unlock 
                      new opportunities for growth. Our dedication to excellence and a customer-centric approach sets us apart, enabling us to build lasting 
                      partnerships and propel businesses towards success in an ever-evolving digital landscape.
                    </p>
                  </>) : (
                  <>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      Ukiyo Digital se positionne à l'avant-garde de l'innovation, dédié à révolutionner les entreprises grâce à des solutions d'IA de pointe.
                      Fondée par une équipe d'experts chevronnés aux parcours diversifiés et à l'ambition inébranlable, nous sommes animés par une quête incessante de l'excellence et une passion pour repousser les limites.
                      Notre gamme complète de services englobe les chatbots IA, les recommandations de produits pour le commerce électronique, la capture et la génération de leads, la gestion et les recommandations de biens immobiliers, les assistants personnels d'entraînement IA, les GPT personnalisés, le support client automatisé, et bien plus encore.
                      Chaque solution est méticuleusement conçue pour répondre aux besoins uniques de nos clients, les aidant à rationaliser leurs opérations, à améliorer leur productivité et à rester en tête sur le marché dynamique d'aujourd'hui.
                    </p>

                    <p>
                      Chez Ukiyo Digital, nous plaçons la réussite de nos clients au-dessus de tout. Avec un engagement envers la transparence, la collaboration et 
                      l'innovation, nous travaillons en étroite collaboration avec nos clients pour comprendre leurs objectifs commerciaux et fournir des solutions 
                      sur mesure qui génèrent des résultats tangibles. Grâce à nos processus simplifiés, à nos solutions efficaces et à nos outils d'automatisation 
                      conviviaux, nous simplifions les tâches complexes, optimisons les flux de travail et débloquons de nouvelles opportunités de croissance. Notre 
                      dévouement à l'excellence et notre approche centrée sur le client nous distinguent, nous permettant de bâtir des partenariats durables et de 
                      propulser les entreprises vers le succès dans un paysage numérique en constante évolution.
                    </p>
                  </>
                )}

                {/*
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Please visit:{" "}
                  <b>
                    <a href="https://nextjstemplates.com/docs">
                      nextjstemplates.com/docs
                    </a>
                  </b>{" "}
                  to check out the real docs, setup guide and even video
                  instructions
                </p>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
