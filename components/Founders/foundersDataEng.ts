import image1 from "@/public/images/founders/hichem.webp";
import image2 from "@/public/images/founders/samy.jpg";
import { Founder } from "@/types/founder";

const foundersData: Founder[] = [
  {
    id: 1,
    name: "Hisham Dahmani",
    designation: "Co-Founder @ Ukiyo Digital",
    image: image1,
    website: 'https://contra.com/hichem_dahmani_bmgkxb9b',
    content:
      "Fuelled by a relentless ambition for innovation, Hisham tirelessly drives our company towards greater heights and groundbreaking achievements.",
  },
  {
    id: 2,
    name: "Samy Allal",
    designation: "Co-Founder @ Ukiyo Digital",
    image: image2,
    website: 'https://www.samyallal.com',
    content:
      "With an unwavering ambition for success, Samy is committed to driving forward our company's vision and spearheading innovation in the industry.",
  },
];

export default foundersData;