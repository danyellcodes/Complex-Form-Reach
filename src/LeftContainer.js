import TextInput from "./TextInput";

export default function LeftContainer(props) {
  return (
    <div className="left__container">
      <h1 className="left-container__header ">{props.title}</h1>
      <TextInput
        next={props.next}
        stage={props.stage}
        saveEmail={props.saveEmail}
        saveBudget={props.saveBudget}
        saveOther={props.saveOther}
        activeBtn={props.activeBtn}
      />
    </div>
  );
}

/*
1. Create the object with three properties somewhere
2. Change the properties during onChange or onClick
3. The final next button sets off an alert. Does that mean we need another button or just that the function is conditionally tied to the stage? 


*/
