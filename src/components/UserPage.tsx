import { useEffect, useState } from "react";
import { User, loadUser, userSelector } from "../store/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const UserPage = () => {
  useSelector((state: RootState) => state.users);
  const usersSele = useSelector((state: RootState) => state.users);

  const [users, setUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const selectedUsers = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(selectedUsers.loading);
    setError(selectedUsers.error);
    setUsers(selectedUsers.users);
  }, [selectedUsers.users]);

  function handleFetchUser() {
    console.log("HANDLE FETCH USER in USERPAGE");
    dispatch(loadUser());
  }

  return (
    <div>
      {loading && <div>Loading... </div>}
      {error && <div>Error: {error}</div>}
      {users?.map((user) => (
        <li key={user.id}>
          {user.id} | {user.name} | {user.email}
        </li>
      ))}
      <button className="btn" onClick={handleFetchUser}>
        Fetch User
      </button>
    </div>
  );
};

export default UserPage;
