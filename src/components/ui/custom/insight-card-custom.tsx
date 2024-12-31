import { InsightCard } from "./insight-card";
import { ViewAll } from "./view-all-btn";

interface InsightCardData {
  cardImage: string;
  icon: string;
  buttonText: string;
  title: string;
  description: string;
}

interface InsightProps {
  headingTitle: string;
  subHeadingTitle: string;
  cards: InsightCardData[];
}

export const InsightCardCustom: React.FC<InsightProps> = ({
  headingTitle,
  subHeadingTitle,
  cards,
}) => {
  return (
    <div className="w-full bg-white">
      <div className="h-auto lg:h-[140vh] global-margin">
        <HeadingSection title={headingTitle} subTitle={subHeadingTitle} />
        <CardsSection cards={cards} />
        <ViewAllSection />
      </div>
    </div>
  );
};

// Heading Section Component
interface HeadingSectionProps {
  title: string;
  subTitle: string;
}

const HeadingSection: React.FC<HeadingSectionProps> = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
      <div className="w-full lg:w-[500px] py-8">
        <h1 className="text-[24px] lg:text-[40px] uppercase leading-8 lg:leading-10 font-extrabold mb-2">
          {title}
        </h1>
        <h1 className="text-[24px] lg:text-[40px] uppercase leading-8 lg:leading-10 font-extrabold">
          {subTitle}
        </h1>
      </div>
    </div>
  );
};

// Cards Section Component
interface CardsSectionProps {
  cards: InsightCardData[];
}

const CardsSection: React.FC<CardsSectionProps> = ({ cards }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
        {cards.map((card, index) => (
          <InsightCard
            key={index}
            cardImage={card.cardImage}
            icon={card.icon}
            title={card.title}
            buttonText={card.buttonText}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

// View All Section Component
const ViewAllSection = () => {
  return (
    <div className="w-full flex justify-center items-center py-8">
      <ViewAll />
    </div>
  );
};
