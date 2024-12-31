import { LeaderCustom } from "../../leader-custom";
import L1 from "../../../../../assets/leader-image/L1.png";
import L2 from "../../../../../assets/leader-image/L2.png";

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

export const LeaderCrmNext = () => {
  return (
    <LeaderCustom
      title="CRMNEXT Recognized as a Leader"
      backgroundColor="#EDF7FD"
      leaderData={leaders}
      slidesPerView={1}
      spaceBetween={15}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 1.5, spaceBetween: 15 },
        1024: { slidesPerView: 2.5, spaceBetween: 10 },
      }}
    />
  );
};
