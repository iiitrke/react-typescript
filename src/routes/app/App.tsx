import { Banner } from "../../components/banner/Banner";
import { FeaturCouComp } from "../../components/featuredcourse/featuredcoursecomp";
import { IntroComp } from "../../components/intro/IntroComp";
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

      <h1 className="welcome"> Welcome to Itasca Technologies</h1>
      <p>
        Itasca Technologies is a good training institue in Roorkee. We are
        having a good track record. Our students are placed in SAP Lab, NTT
        Data, Accenture etc.{" "}
      </p>

      <IntroComp />
      <Loginform />
      <FeaturCouComp />
    </div>
  );
}

export default App;
