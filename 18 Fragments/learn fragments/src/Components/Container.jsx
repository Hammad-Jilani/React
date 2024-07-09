import style from "./Container.module.css";

// function Container(props) {
//   return <div className={`${style["container"]}`}>{props.children}</div>;
// }

function Container({ children }) {
  return <div className={`${style["container"]}`}>{children}</div>;
}

export default Container;
