import { useDispatch } from "react-redux";
import { useUserActions } from "../hooks/useUserActions";
const UserPage = () => {
  const { searchRepositories } = useUserActions();
  const dispatch = useDispatch<any>();
  function handleFetchUser() {
    console.log("HandleFetchUser in UserPage");
    searchRepositories();
  }
  return (
    <div>
      <button className="btn" onClick={handleFetchUser}>
        Fetch User1
      </button>
    </div>
  );
};

export { UserPage };
