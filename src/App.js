import "./styles.css";
import { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightImage from "./RightImages";

export default function App() {
  const [stage, setStage] = useState(0);
  const [state, setState] = useState([
    {
      img: "https://assets.codepen.io/6060109/form-stage-1.png",
      title: "Apply to work with our agency"
    },
    {
      img: "https://assets.codepen.io/6060109/form-stage-2.png",
      title: "What's your budget?"
    },
    {
      img: "https://assets.codepen.io/6060109/form-stage-3.png",
      title: "Anything else we should know?"
    },
    {
      img: "https://assets.codepen.io/6060109/form-stage-4.png",
      title: "Thank you!"
    }
  ]);

  const [userData, setUserData] = useState({
    email: "",
    budget: "",
    other: ""
  });

  const [activeBtn, setActiveBtn] = useState();

  function nextPage() {
    setStage(stage + 1);
    stage === 2 ? postUserData() : "";
  }

  function saveEmail(e) {
    setUserData((prevData) => {
      return {
        ...prevData,
        email: e.target.value
      };
    });
  }

  function saveBudget(e) {
    setUserData((prevData) => {
      setActiveBtn(e.target.innerHTML);
      return {
        ...prevData,
        budget: e.target.innerHTML
      };
    });
  }

  function saveOther(e) {
    setUserData((prevData) => {
      return {
        ...prevData,
        other: e.target.value
      };
    });
  }

  function postUserData() {
    alert(JSON.stringify(userData));
  }

  return (
    <div className="App">
      <LeftContainer
        title={state[stage].title}
        next={nextPage}
        stage={stage}
        saveEmail={saveEmail}
        saveBudget={saveBudget}
        saveOther={saveOther}
        activeBtn={activeBtn}
      />
      <RightImage img={state[stage].img} />
    </div>
  );
}
