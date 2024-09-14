import Appe from "./FireBase";
import UserAuth from "./SignUp";
import SignIn from "./SignIn";
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(Appe);

const App = () => {
  const WriteUserData = () => {
    console.log("clicked");

    set(ref(db, "users/rasheed"), {
      name: "rasheed",
      age: 24,
      profession: "software engineer",
    })
      .then(() => {
        console.log("Data written successfully!");
      })
      .catch((error) => {
        console.error("error writing ", error);
      });
  };
  return (
    <div>
      {/* <button onClick={WriteUserData}>click me</button> */}
      <UserAuth />
      {/* <SignIn /> */}
    </div>
  );
};
export default App;
