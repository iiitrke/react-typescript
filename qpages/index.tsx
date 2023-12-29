// import { useRouter } from "next/router";
import AppRootLayout from "./layout";
import { BannerFC } from "../src/components/banner/BannerFC";
import { IntroFC } from "../src/components/intro/IntroFC";
import { LoginFormCL } from "../src/components/login/LoginFormCL";
import { FeaturCouComp } from "../src/components/featuredcourse/featuredcoursecomp";
import * as React from "react";
export default function Page() {
  //const navigation = useRouter();
  return (
    <AppRootLayout>
      <BannerFC />
      <IntroFC />

      <FeaturCouComp />
      {/* <LoginFormCL /> */}
    </AppRootLayout>
  );
}
