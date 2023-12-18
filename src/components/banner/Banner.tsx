import React, { HTMLAttributes, useEffect, useState } from "react";

import "../../data/appBannerData";
import { appBannerData } from "../../data/appBannerData";
import { background } from "@storybook/design-system/dist/components/shared/styles";
import { relative } from "path";
import "./banner.css";
import { Box } from "@mui/material";
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
    // <>
    //   <Box
    //     sx={{
    //       bgcolor: "background.paper",
    //       color: "text.secondary",
    //       py: { xs: 0, sm: 0, md: 2 },
    //       marginTop: "20px",
    //       borderTop: "1px solid",
    //       borderColor: "divider",
    //       height: {
    //         xs: "100vh",
    //         sm: "80vh",
    //         md: "40vh",
    //         lg: "40vh",
    //         xl: "40vh",
    //       },
    //       width: "100%",
    //       backgroundImage: `url(${bannerData[imageIndex].imageUrl}`,
    //       // backgroundImage: `url(${bannerData[imageIndex].imageUrl}`,
    //     }}
    //   >
    //     <p>{bannerData[imageIndex].heading1}</p>
    //   </Box>
    // </>

    <div
      className="banner"
      style={{
        // height: "80vh",
        // position: "relative",
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
