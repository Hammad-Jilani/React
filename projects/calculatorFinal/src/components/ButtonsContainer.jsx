import style from "./ButtonsContainer.module.css";
function ButtonsContainer({ onButtonClick }) {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={`${style["buttonsContainer"]}`}>
        {buttonNames.map((items) => (
          <button
            className={`${style["button"]}`}
            onClick={() => onButtonClick(items) /*onButtonClick*/}
          >
            {items}
          </button>
        ))}
      </div>
    </>
  );
}
export default ButtonsContainer;
