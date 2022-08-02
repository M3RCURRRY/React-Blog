import { useState } from "react";
import styles from "./SignModal.module.scss";

function SignModal(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function milkHandler(e) {
    if (e.target.id === "milk") {
      props.onClose();
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    alert(username + " : " + password);
  }

  return(
    <div id="milk" onClick={e => milkHandler(e)} className={styles.modalMilk}>
      <div className={styles.modalContainer}>
        <h2>Sign up</h2>
        <form onSubmit={submitHandler}>
          <label>
            Username:
            <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
          </label>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
          </label>
          <input type="submit" value="Sign in" className={styles.submitInput}/>
        </form>
      </div>
    </div>
  )
}

export default SignModal;