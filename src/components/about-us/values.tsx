import { ValueMain } from "../ui/custom/values-main";
import image from "../../assets/about/Values.jpg";
import icon1 from "../../assets/about/happy_customer.png";
import icon2 from "../../assets/about/icons.png";
import icon3 from "../../assets/about/happy_customer.png";
import icon4 from "../../assets/about/index.png";

const images = [{ src: image, alt: "Acquire Relationships" }];
const icons = [
  {
    src: icon1,
    alt: "Happy Employees",
    boxheading: "Happy Employees",
    boxdescription: "We Consciously Choose To Be Happy And Serve With Joy.",
  },
  {
    src: icon2,
    alt: "Quality Service",
    boxheading: "Quality Service",
    boxdescription: "We Prioritize Quality In Every Step We Take.",
  },
  {
    src: icon3,
    alt: "Customer Focused",
    boxheading: "Customer Focused",
    boxdescription: "Our Customers Are At The Heart Of What We Do.",
  },
  {
    src: icon4,
    alt: "Innovation",
    boxheading: "Innovation",
    boxdescription: "We Strive For Continuous Improvement And Innovation.",
  },
];

export const Values: React.FC = () => {
  const selectedImage = images[0];

  return (
    <ValueMain
      topheading="Our Values That We Care"
      topdescription="That Help Businesses Be Remarkably Responsive To Ever-Evolving Needs."
      leftimage={selectedImage}
      icon={icons}
    />
  );
};
