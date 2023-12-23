import { useRouter } from "next/router";
import AppRootLayout from "./layout";
import { BannerFC } from "../components/banner/BannerFC";
import { IntroFC } from "../components/intro/IntroFC";
import { LoginFormCL } from "../components/login/LoginFormCL";
import * as React from "react";
export default function Page() {
  const navigation = useRouter();
  return (
    <AppRootLayout>
      <BannerFC />
      <IntroFC />

      {/* <LoginFormCL /> */}
    </AppRootLayout>
  );
}
