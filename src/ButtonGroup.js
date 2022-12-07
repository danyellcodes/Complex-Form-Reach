const BTN_TXT = ["$2k", "$5k", "No limit"];

export default function ButtonGroup(props) {
  return (
    <div className="button-group">
      {BTN_TXT.map((txt, i) => {
        return (
          <button
            className={props.activeBtn === txt ? "active" : ""}
            onClick={props.saveBudget}
            key={i}
          >
            {txt}
          </button>
        );
      })}
    </div>
  );
}
