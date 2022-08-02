import styles from "./Button.module.scss";

function Button(props) {
  return <button onClick={props.handler}>{props.content}</button>
}

export default Button;