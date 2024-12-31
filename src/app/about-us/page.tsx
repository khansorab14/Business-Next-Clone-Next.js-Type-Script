import { AboutUsBanner } from "@/components/about-us/about-us-banner";
import { Ambitious } from "@/components/about-us/ambitious";
import { Stats } from "@/components/about-us/stats";
import { Values } from "@/components/about-us/values";
import { WorldWide } from "@/components/about-us/world-wide";

import { Personalization } from "@/components/ui/custom/product/crmnext/personalization";

export default function page() {
  return (
    <>
      <AboutUsBanner />
      <Ambitious />
      <Values />
      <Stats />
      <Personalization />
      <WorldWide />
    </>
  );
}
