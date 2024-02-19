import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Daniel Nataf",
    designation: "PDG @ Le Boutiquier",
    image: image1,
    content:
      "Hichem est très fiable et son discours est simple et efficace. Ce fut un plaisir de travailler avec lui.",
  },
  {
    id: 2,
    name: "Ilies C",
    designation: "Ingénieur @ UPEC",
    image: image2,
    content:
      "Hichem est une personne très talentueuse et créative. Son professionnalisme et sa vision font de lui un individu précieux.",
  },
  /*{
    id: 3,
    name: "Devid Smith",
    designation: "Founter @democompany",
    image: image1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna.",
  },
  {
    id: 4,
    name: "Jhon Abraham",
    designation: "Founter @democompany",
    image: image2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna.",
  },*/
];


export default testimonialData;