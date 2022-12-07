import ButtonGroup from "./ButtonGroup";

export default function TextInput(props) {
  return (
    <div className="text-input__container">
      {props.stage === 0 && (
        <input
          type="text"
          id="email"
          placeholder="What's your email?"
          onChange={props.saveEmail}
        />
      )}
      {props.stage === 1 && (
        <ButtonGroup
          saveBudget={props.saveBudget}
          activeBtn={props.activeBtn}
        />
      )}
      {props.stage === 2 && (
        <input type="text" id="other" onChange={props.saveOther} />
      )}
      {props.stage !== 3 && (
        <button className="next-button" onClick={props.next}>
          Next
        </button>
      )}
    </div>
  );
}
