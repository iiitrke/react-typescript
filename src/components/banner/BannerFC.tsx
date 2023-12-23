import { Paper } from "@mui/material";
import React, { HTMLAttributes, useEffect, useState } from "react";
import { appBannerData } from "../../data/appBannerData";

interface IBannerProps extends HTMLAttributes<HTMLElement> {
  data?: any;
  interval?: number;
}

export const BannerFC: React.FC = () => {
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
  const Image = "/images/banner/aws.jpeg";

  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(${bannerData[imageIndex].imageUrl})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "70vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          marginTop: "10",
        }}
      ></Paper>
    </>
  );
};
