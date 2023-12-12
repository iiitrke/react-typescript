import { Banner } from "../../components/banner/Banner";
import { TrainingService } from "./training-service";
import "./App.css";

// import { Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Banner />
      <div className="trg">
        <TrainingService />
      </div>
    </div>
  );
}

export default App;
