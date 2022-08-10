import { useContext, useReducer, useState } from "react";
import { Offcanvas, Spinner } from "react-bootstrap";
import AuthContext from "../../../../utils/AuthContext";
import SignAlert from "../../Alerts/SignAlert/CredAlert";
import NoUserFoundAlert from "../../Alerts/SignAlert/NoUserFoundAlert";
import styles from "./SignInCanvas.module.scss";

const credentialsValidator = /^[A-Za-z0-9]*$/;

function SignInCanvas(props) {

  const ctx = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isErrored, setErrored] = useState(false);
  const [isNoUserFound, setNoUserFound] = useState(false);
  const [isPending, setPending] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    if (
      !credentialsValidator.test(username) ||
      !credentialsValidator.test(password) ||
      password === "" ||
      username === ""
    ) {
      setErrored(true);
      setUsername("");
      setPassword("");
      setTimeout(() => {
        if (!isErrored) {
          setErrored(false);
        }
      }, 3000);
    } else {
      let users = null;
      setPending(true);
      fetch("https://dummyjson.com/users?limit=101")
        .then((resp) => resp.json())
        .then((json) => {
          let isFound = false;
          users = json.users;
          // Searching for user
          users.map(user => {
            if (user.username === username && user.password === password) {
              isFound = true;
              ctx.setAuthData({
                isAuthed: true,
                username: user.username,
                maidenName: user.maidenName,
                image: user.image,
                email: user.email
              })
            }
          })
          // If no matches with JSON
          if (!isFound) {
            setPending(false);           
            setNoUserFound(true);
            setTimeout(() => {
              if (!isNoUserFound) setNoUserFound(false);
            }, 3000)
          }
        });
    }
  }

  const usernameHandler = (e) => setUsername(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);

  return (
    <Offcanvas show={props.show} onHide={props.onHide}>
      {isErrored && <SignAlert onClose={() => setErrored(false)} />}
      {isNoUserFound && <NoUserFoundAlert onClose={() => setNoUserFound(false)} />}
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <h3>Sign in</h3>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {isPending ? 
          <Spinner animation="border" variant="dark" className={styles.spinnerMargin}/>
         : (
          <form onSubmit={(e) => submitHandler(e)} className={styles.form}>
            <label className={styles.label}>
              <span>
                Username <span className={styles.required}>*</span>
              </span>
              <input
                type="text"
                value={username}
                className={styles.textinput}
                onChange={(e) => usernameHandler(e)}
                required
              />
            </label>
            <label className={styles.label}>
              <span>
                Password <span className={styles.required}>*</span>
              </span>
              <input
                type="password"
                value={password}
                className={styles.textinput}
                onChange={(e) => passwordHandler(e)}
                required
              />
            </label>
            <input
              type="submit"
              value="Sign in"
              className={styles.submitButton}
            />
          </form>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SignInCanvas;
