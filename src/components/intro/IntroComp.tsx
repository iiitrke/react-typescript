import { useDispatch } from "react-redux";
import { useUserActions } from "../../hooks/useUserActions";
import { useIntroAction } from "../../state/hooks/useIntroAction";
import { useTypedSeletor } from "../../state/hooks/useTypedSelector";
import { RootState } from "../../state";
import { IntroState } from "../../state/reducers/introReducer";
import { IntroModel } from "../../state/models/Intro-type";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardMedia } from "@mui/material";
import "./Intro.css";
const IntroComp = () => {
  const { searchRepositories } = useUserActions();
  const { introRepository } = useIntroAction();
  const { loading, error, cached, data } = useTypedSeletor(
    (state) => state.introRepository
  );
  function handleFetchUser() {
    searchRepositories();
    introRepository();
    console.log("HandleFetchUser in UserPage");
  }
  return (
    <>
      <div className="intro">
        {data.map((intro: IntroModel, index) => (
          <div>
            <Card key={index}>
              <CardMedia
                component="img"
                image={`./images/intro/${intro.image}`}
              />

              <CardContent>
                <ReactMarkdown children={intro.title} />
                <ReactMarkdown children={intro.desc} />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <button className="btn" onClick={handleFetchUser}>
        Fetch User1
      </button>
    </>
  );
};

export { IntroComp };
