import SignUp from "../../components/sign-up/sign-up.js";
import SignIn from "../../components/sign-in.js/sign-in.js";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
