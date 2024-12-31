import { MainCustomerJourney } from "./ui/custom/product/crmnext/main-customer-journey";

export const CustomerJourney: React.FC = () => {
  return (
    <MainCustomerJourney
      topHeading={<h1>Powerful, digital customer journeys powered by data.</h1>}
      topDescription={
        <h1>
          Activate a personalization layer throughout your digital touchpoints
          to remove friction and reduce manual processes. Activate a
        </h1>
      }
    />
  );
};
