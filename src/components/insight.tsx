import Insight1 from "../assets/insight/insight1.png";
import Insight2 from "../assets/insight/insight3.png";
import Insight3 from "../assets/insight/insight1.png";
import Icon1 from "../assets/insight/Icon1.png";
import Icon2 from "../assets/insight/icon2.png";
import Icon3 from "../assets/insight/icon2.png";
import { InsightCardCustom } from "./ui/custom/insight-card-custom";

const cards = [
  {
    cardImage: Insight3,
    icon: Icon1,
    buttonText: "Blog",
    title: "Boosting loans & deposits: The blueprint for credit unions...",
    description:
      "A dynamic 360 View of Account Holder surfacing insights and recommended actions",
  },
  {
    cardImage: Insight1,
    icon: Icon2,
    buttonText: "Podcast",
    title: "Boosting loans & deposits: The blueprint for credit unions...",
    description:
      "A dynamic 360 View of Account Holder surfacing insights and recommended actions",
  },
  {
    cardImage: Insight2,
    icon: Icon3,
    buttonText: "Insights",
    title: "Boosting loans & deposits: The blueprint for credit unions...",
    description:
      "A dynamic 360 View of Account Holder surfacing insights and recommended actions",
  },
];

export const Insight = () => {
  return (
    <InsightCardCustom
      headingTitle="Insights &"
      subHeadingTitle="Trail of Success"
      cards={cards}
    />
  );
};
