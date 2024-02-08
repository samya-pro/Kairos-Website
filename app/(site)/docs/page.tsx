import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default function DocsPage() {
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
                <h1>Welcome to Kairos A.I.</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Kairos AI stands at the forefront of innovation, dedicated to revolutionizing businesses through cutting-edge AI solutions. 
                  Founded by a team of seasoned experts with diverse backgrounds and unwavering ambition, we are driven by a relentless pursuit 
                  of excellence and a passion for pushing boundaries. Our comprehensive suite of services encompasses AI chatbots, e-commerce product 
                  recommendations, lead capture and generation, real estate property management and recommendations, AI personal trainer buddies, custom GPTs, 
                  automated customer support, and more. Each solution is meticulously crafted to cater to the unique needs of our clients, empowering them to 
                  streamline operations, enhance productivity, and stay ahead in today's dynamic marketplace.
                </p>

                <p>
                  At Kairos AI, we prioritize customer success above all else. With a commitment to transparency, collaboration, and innovation, we work 
                  closely with our clients to understand their business objectives and deliver tailored solutions that drive tangible results. Through our 
                  streamlined processes, effective solutions, and user-friendly automation tools, we simplify complex tasks, optimize workflows, and unlock 
                  new opportunities for growth. Our dedication to excellence and a customer-centric approach sets us apart, enabling us to build lasting 
                  partnerships and propel businesses towards success in an ever-evolving digital landscape.
                </p>

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
