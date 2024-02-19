import image1 from "@/public/images/founders/hichem.webp";
import image2 from "@/public/images/founders/samy.jpg";
import { Founder } from "@/types/founder";

const foundersData: Founder[] = [
  {
    id: 1,
    name: "Hisham Dahmani",
    designation: "Co-Fondateur @ Ukiyo Digital",
    image: image1,
    website: 'https://contra.com/hichem_dahmani_bmgkxb9b',
    content:
      "Animé par une ambition incessante d'innovation, Hisham conduit inlassablement notre entreprise vers de plus grands sommets et des réalisations révolutionnaires.",
  },
  {
    id: 2,
    name: "Samy Allal",
    designation: "Co-Fondateur @ Ukiyo Digital",
    image: image2,
    website: 'https://www.samyallal.com',
    content:
      "Avec une ambition inébranlable pour le succès, Samy s'engage à faire avancer la vision de notre entreprise et à être à la pointe de l'innovation dans l'industrie.",
  },
];

export default foundersData;