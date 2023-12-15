import { Banner } from "../../components/banner/Banner";
import { TrainingService } from "./training-service";
import "./App.css";
import { IntroComp } from "../../components/intro/IntroComp";
import { Loginform } from "../../components/login/LoginComp";

// import { Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Banner />
      {/* <div className="trg">
        <TrainingService />
      </div> */}
      {/* <UserPage /> */}
      <IntroComp />
      <Loginform />
    </div>
  );
}

export default App;
