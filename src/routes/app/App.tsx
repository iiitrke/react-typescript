import { Banner } from "../../components/banner/Banner";
import { TrainingService } from "./training-service";
import "./App.css";
import { IntroComp } from "../../components/intro/IntroComp";
import { Loginform } from "../../components/login/LoginComp";
import { FeaturedCourse } from "../../components/feature-courses/FeaturedCourses";

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

      <FeaturedCourse />
      <IntroComp />
      <Loginform />
    </div>
  );
}

export default App;
