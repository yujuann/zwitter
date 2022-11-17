import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const navigate = useHistory();
  const onLogOutClick = () => {
    signOut(getAuth());
    navigate("/");
  };

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
