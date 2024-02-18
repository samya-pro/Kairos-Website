import { Founder } from "@/types/founder";
import Image from "next/image";

const SingleFounder = ({ review }: { review: Founder }) => {
  const { name, designation, image, content, website } = review;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
          <p>{designation}</p>
          <div>
            <a
              href={website}
              target="_blank"
              className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
            >
              <span className="duration-300 group-hover:pr-2">
                Visit Profile
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="currentColor"
              >
                <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
              </svg>
            </a>
          </div>
        </div>
        
        <Image width={90} height={50} style={{backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%'}} src={image} alt={name} />
      </div>
      

      <p>{content}</p>
    </div>
  );
};

export default SingleFounder;
