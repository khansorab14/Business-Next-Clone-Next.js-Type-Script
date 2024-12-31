import cus1 from "../assets/customer/cus1.png";
import cus2 from "../assets/customer/cus2.png";
import cus3 from "../assets/customer/cus3.png";
import icon from "../assets/customer/icon1.png";
import { CustomerCardCustom } from "./ui/custom/customer-card-custom";

export const Customer = () => {
  const customers = [
    {
      image: cus1,
      name: "Robert Jameson",
      position: "Chairman",
      feedback:
        "If I knew how easy it would be to stand up chatbots and how much benefit we would be able to drive with them, I would have started sooner.",
    },
    {
      image: cus2,
      name: "Emily Clark",
      position: "CEO",
      feedback:
        "Our chatbot solution revolutionized our customer service experience. The process was seamless!",
    },
    {
      image: cus3,
      name: "Michael Smith",
      position: "Director",
      feedback:
        "The benefits we gained from this solution were beyond our expectations. Highly recommend it!",
    },
    {
      image: cus1,
      name: "Robert Jameson",
      position: "Chairman",
      feedback:
        "If I knew how easy it would be to stand up chatbots and how much benefit we would be able to drive with them, I would have started sooner.",
    },
    {
      image: cus2,
      name: "Emily Clark",
      position: "CEO",
      feedback:
        "Our chatbot solution revolutionized our customer service experience. The process was seamless!",
    },
    {
      image: cus3,
      name: "Michael Smith",
      position: "Director",
      feedback:
        "The benefits we gained from this solution were beyond our expectations. Highly recommend it!",
    },
    {
      image: cus1,
      name: "Robert Jameson",
      position: "Chairman",
      feedback:
        "If I knew how easy it would be to stand up chatbots and how much benefit we would be able to drive with them, I would have started sooner.",
    },
    {
      image: cus2,
      name: "Emily Clark",
      position: "CEO",
      feedback:
        "Our chatbot solution revolutionized our customer service experience. The process was seamless!",
    },
    {
      image: cus3,
      name: "Michael Smith",
      position: "Director",
      feedback:
        "The benefits we gained from this solution were beyond our expectations. Highly recommend it!",
    },
  ];
  return (
    <CustomerCardCustom
      title="What Our"
      subTitle="Customers Say"
      customers={customers}
      icon={icon}
      slidesPerView={2.5}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 1.5, spaceBetween: 15 },
        1024: { slidesPerView: 2.5, spaceBetween: 20 },
      }}
    />
  );
};
