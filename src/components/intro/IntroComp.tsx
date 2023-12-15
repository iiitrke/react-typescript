import { useDispatch } from "react-redux";
import { useUserActions } from "../../hooks/useUserActions";
import { useIntroAction } from "../../state/hooks/useIntroAction";
import { useTypedSeletor } from "../../state/hooks/useTypedSelector";
import { RootState } from "../../state";
import { IntroState } from "../../state/reducers/introReducer";

import ReactMarkdown from "react-markdown";
import { Card, CardContent } from "@mui/material";
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
    <div>
      {data.map((intro, index) => (
        <div>
          <Card key={index}>
            <CardContent>
              <ReactMarkdown children={intro.title} />
            </CardContent>
          </Card>
        </div>
      ))}
      <button className="btn" onClick={handleFetchUser}>
        Fetch User1
      </button>
    </div>
  );
};

export { IntroComp };
