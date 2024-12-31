import { Banner } from "@/components/banner";

import { PartnershipBrand } from "@/components/brand";

import { EcoSystem } from "@/components/eco-system";
import { ExperienceLayer } from "@/components/experience-layer";

import { Insight } from "@/components/insight";

import Navbar from "@/components/navbar";
import { Solutions } from "@/components/solutions";

import { Leader } from "@/components/leader";
import { Customer } from "@/components/customer";

export default function Home() {
  return (
    <>
      {/* Home (Section) */}
      <Navbar />

      <Banner />
      <ExperienceLayer />
      <PartnershipBrand />
      <Solutions />
      <Leader />
      <Insight />
      <Customer />
      <EcoSystem />
    </>
  );
}
