"use client";
import { BannerFC } from "../src/components/banner/BannerFC";
import { IntroFC } from "../src/components/intro/IntroFC";
import { FeaturCouComp } from "../src/components/featuredcourse/featuredcoursecomp";
import * as React from "react";
export default function HomePage() {
  return (
    // <AppRootLayout>
    <>
      <BannerFC />
      <IntroFC />
      <FeaturCouComp />
    </>
    // </AppRootLayout>
  );
}
