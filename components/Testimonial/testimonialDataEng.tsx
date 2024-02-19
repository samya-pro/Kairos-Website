import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Daniel Nataf",
    designation: "CEO @ Le Boutiquier",
    image: image1,
    content:
      "Hichem is very reliable and has a straightforward and effective communication style. It was a pleasure working with him.",
  },
  {
    id: 2,
    name: "Ilies C",
    designation: "Engineer @ UPEC",
    image: image2,
    content:
      "Hichem is a very talented and creative person, his professionalism and vision makes him an extremely valuable individual.",
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