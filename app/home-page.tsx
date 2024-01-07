"use client";
import { BannerFC } from "../src/components/banner/BannerFC";
import { IntroFC } from "../src/components/intro/IntroFC";
import { FeaturCouComp } from "../src/components/featuredcourse/featuredcoursecomp";
import * as React from "react";
import { useSession } from "next-auth/react";
export default function HomePage() {
  const { data, status, update } = useSession();

  return (
    // <AppRootLayout>
    <>
      <BannerFC />
      <IntroFC />
      <FeaturCouComp />
      {JSON.stringify(data)}
      {JSON.stringify(status)}
      {JSON.stringify(update)}
    </>
    // </AppRootLayout>
  );
}
