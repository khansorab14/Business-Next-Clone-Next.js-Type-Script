import L1 from "../assets/leader-image/L1.png";
import L2 from "../assets/leader-image/L2.png";
import { LeaderCustom } from "./leader-custom";

const leaders = [
  {
    image: L1,
    description:
      "Forrester's comprehensive evaluation of financial services CRM providers.",
  },
  {
    image: L2,
    description: "Gartner’s recognition of CRMNEXT in the Magic Quadrant.",
  },
  {
    image: L1,
    description:
      "Forrester's comprehensive evaluation of financial services CRM providers.",
  },
  {
    image: L2,
    description: "Gartner’s recognition of CRMNEXT in the Magic Quadrant.",
  },
  {
    image: L1,
    description:
      "Forrester's comprehensive evaluation of financial services CRM providers.",
  },
  {
    image: L2,
    description: "Gartner’s recognition of CRMNEXT in the Magic Quadrant.",
  },
  {
    image: L1,
    description:
      "Forrester's comprehensive evaluation of financial services CRM providers.",
  },
  {
    image: L2,
    description: "Gartner’s recognition of CRMNEXT in the Magic Quadrant.",
  },
  {
    image: L1,
    description:
      "Forrester's comprehensive evaluation of financial services CRM providers.",
  },
  {
    image: L2,
    description: "Gartner’s recognition of CRMNEXT in the Magic Quadrant.",
  },
];

export const Leader = () => {
  return (
    <LeaderCustom
      title="CRMNEXT Recognized as a Leader"
      backgroundColor="#FFDBE9"
      leaderData={leaders}
      slidesPerView={1}
      spaceBetween={15}
      breakpoints={{
        520: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 15 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
      }}
    />
  );
};
