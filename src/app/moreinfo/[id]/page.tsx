"use client";
import React from "react";
import MoreInfo from "~/once-ui/components/custom/moreInfo";

export default function PricingPage({ params }) {
  const { id } = params;

  if (!id) {
    return <div>Loading...</div>;
  }

  return <MoreInfo id={id} />;
}
