import { Box, Container, Grid } from "@mui/material";
import { Banner } from "../../components/banner/Banner";
import { FeaturCouComp } from "../../components/featuredcourse/featuredcoursecomp";
import { IntroComp } from "../../components/intro/IntroComp";
import { IntroFC } from "../../components/intro/IntroFC";
import { Loginform } from "../../components/login/LoginComp";
import "./App.css";
import { BannerFC } from "../../components/banner/BannerFC";

// import { Switch } from "react-router-dom";
function App() {
  return (
    <Box
      flexDirection={"row"}
      display={"flex"}
      flexWrap={"wrap"}
      gap={6}
      justifyContent={"space-between"}
      marginTop={5}
    >
      <Container maxWidth={false}>
        {/* <div> */}
        {/* <Banner /> */}
        <BannerFC />
        {/* <div className="trg">
        <TrainingService />
      </div> */}
        {/* <UserPage /> */}

        {/* <IntroComp /> */}
        <IntroFC />

        <FeaturCouComp />
        {/* <Loginform /> */}
        {/* </div> */}
      </Container>
    </Box>
  );
}

export default App;
