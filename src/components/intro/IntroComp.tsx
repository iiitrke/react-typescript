import { useDispatch } from "react-redux";
import { useUserActions } from "../../hooks/useUserActions";
import { useIntroAction } from "../../state/hooks/useIntroAction";
import { useTypedSeletor } from "../../state/hooks/useTypedSelector";
import { RootState } from "../../state";
import { IntroState } from "../../state/reducers/introReducer";
const UserPage = () => {
  const { searchRepositories } = useUserActions();
  const { introRepository } = useIntroAction();

  const repoIntro: IntroState = useTypedSeletor(
    (state) => state.introRepository
  );

  function handleFetchUser() {
    searchRepositories();
    introRepository();
    console.log("HandleFetchUser in UserPage");
  }
  return (
    <div>
      {repoIntro.data.map((intro) => intro.title)}
      <button className="btn" onClick={handleFetchUser}>
        Fetch User1
      </button>
    </div>
  );
};

export { UserPage };
