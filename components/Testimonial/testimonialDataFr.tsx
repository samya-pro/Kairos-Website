import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "David S.",
    designation: "Fondateur @ -",
    image: image1,
    content:
      "Prochainement.",
  },
  {
    id: 2,
    name: "Mary A.",
    designation: "Fondateur @ -",
    image: image2,
    content:
      "Prochainement.",
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