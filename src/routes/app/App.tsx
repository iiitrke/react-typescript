import { Banner } from "../../components/banner/Banner";
import { TrainingService } from "./training-service";
import "./App.css";
import UserPage from "../../components/UserPage";

// import { Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Banner />
      <div className="trg">
        <TrainingService />
      </div>
      <UserPage />
    </div>
  );
}

export default App;
