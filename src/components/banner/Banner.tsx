import React, { HTMLAttributes, useEffect, useState } from "react";

import "../../data/appBannerData";
import { appBannerData } from "../../data/appBannerData";
import { background } from "@storybook/design-system/dist/components/shared/styles";
import { relative } from "path";
import "./banner.css";
interface IBannerProps extends HTMLAttributes<HTMLElement> {
  data?: any;
  interval?: number;
}
const Banner = ({ data, ...props }: IBannerProps) => {
  const bannerData = appBannerData;
  const [imageIndex, setImageIndex] = useState<number>(0);
  const len = bannerData.length;

  useEffect(() => {
    let timeout1 = setInterval(() => {
      if (imageIndex >= len - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }, 5000);

    return () => clearTimeout(timeout1);
  });

  return (
    <div
      className="banner"
      style={{
        height: "80vh",
        position: "relative",
        backgroundImage: `url(${bannerData[imageIndex].imageUrl}`,
      }}
    >
      <div className="heading1">
        <p>{bannerData[imageIndex].heading1}</p>
      </div>
    </div>
  );
};

export { Banner };
