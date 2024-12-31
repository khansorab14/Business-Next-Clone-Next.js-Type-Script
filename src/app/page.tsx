import { Banner } from "@/components/banner";
import { Banner2 } from "@/components/ui/custom/product/crmnext/crm-next-banner";
import { PartnershipBrand } from "@/components/brand";

import { EcoSystem } from "@/components/eco-system";
import { ExperienceLayer } from "@/components/experience-layer";
import { Footer } from "@/components/footer";
import { Insight } from "@/components/insight";

import Navbar from "@/components/navbar";
import { Solutions } from "@/components/solutions";

import { Leader } from "@/components/leader";
import { Customer } from "@/components/customer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Home (Section) */}

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
