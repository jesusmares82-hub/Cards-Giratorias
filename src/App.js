import "./styles.css";
import { Profile } from "./Profile";
import { Interests } from "./Interests";
import { Learn } from "./Learn";
import { Expectations } from "./Expectations";
import { Hobbies } from "./Hobbies";

export default function App() {
  return (
    <div className="App">
      <h1>About Me</h1>
      <div className="flex flex-wrap">
        <Profile />
        <Interests />
        <Learn />
        <Expectations />
        <Hobbies />
      </div>
    </div>
  );
}
