import { Banner } from "../../components/banner/Banner";
import { FeaturCouComp } from "../../components/featuredcourse/featuredcoursecomp";
import { IntroComp } from "../../components/intro/IntroComp";
import { IntroFC } from "../../components/intro/IntroFC";
import { Loginform } from "../../components/login/LoginComp";
import "./App.css";

// import { Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Banner />
      {/* <div className="trg">
        <TrainingService />
      </div> */}
      {/* <UserPage /> */}

      {/* <IntroComp /> */}
      <IntroFC />

      <FeaturCouComp />
      {/* <Loginform /> */}
    </div>
  );
}

export default App;
