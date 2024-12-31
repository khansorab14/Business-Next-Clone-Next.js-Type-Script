import { CustomerJourney } from "@/components/customer-journey";

import { CustomerCrmNext } from "@/components/ui/custom/product/crmnext/customer-crm-next";
import { DashboardReport } from "@/components/ui/custom/product/crmnext/dashboard-report";
import { InsightCrmNext } from "@/components/ui/custom/product/crmnext/insight-crm-next";
import { LeaderCrmNext } from "@/components/ui/custom/product/crmnext/leader-crm-next";
import { Personalization } from "@/components/ui/custom/product/crmnext/personalization";

import { DataNextBanner } from "@/components/ui/custom/product/data-next/data-next-banner";

export default function page() {
  return (
    <>
      <DataNextBanner />
      <CustomerJourney />
      <DashboardReport />
      <Personalization />
      <LeaderCrmNext />
      <InsightCrmNext />
      <CustomerCrmNext />
    </>
  );
}