import { useReducer, useState } from "react";
import { Offcanvas, Spinner } from "react-bootstrap";
import SignAlert from "../../Alerts/SignAlert/CredAlert";
import SuccessSignUpAlert from "../../Alerts/SignAlert/SuccessSignUpAlert";
import styles from "./SignUpCanvas.module.scss";

const initialState = {
  username: "",
  password: "",
  maidenName: "",
  email: ""
}

// Actions boilerplate
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_MAIDENNAME = "UPDATE_MAIDENNAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const CLEAR_DATA = "CLEAR_DATA"

function reducer(state, action) {
  switch(action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload
      }
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload
      }
    case UPDATE_MAIDENNAME:
      return {
        ...state,
        maidenName: action.payload
      }
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    case CLEAR_DATA:
      break;
  }
}

const credentialsValidator = /^[A-Za-z0-9]*$/;

function SignUpCanvas(props) {

  const [isCredErrored, setCredErrored] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isPending, setPending] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  function submitHandler(e) {
    e.preventDefault();

    if(!credentialsValidator.test(state.username) ||
       !credentialsValidator.test(state.password) ||
       !credentialsValidator.test(state.maidenName)) {
      setCredErrored(true);
      setTimeout(() => {
        if (!isCredErrored) {
          setCredErrored(false)
        }
      }, 3000)
    }
    else {
      setPending(true);
      fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          username: state.username,
          password: state.password,
          maidenName: state.username,
          email: state.email
        })
      })
      .catch(e => alert(e.name))
      .then(resp => resp.json())
      .then(() => {
        setPending(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          props.onHide();
        }, 3000);
      });
    }
  } 

  return(
    <Offcanvas show={props.show} onHide={props.onHide}>
      {isCredErrored && <SignAlert onClose={() => setCredErrored(false)} /> }
      {isSuccess && <SuccessSignUpAlert onClose={() => setSuccess(false)} />}
      <Offcanvas.Header closeButton>
        <Offcanvas.Title><h3>Sign up</h3></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {
          isPending ?
          <Spinner animation="border" variant="dark" className={styles.spinnerMargin}/>
          :
          <form onSubmit={(e) => submitHandler(e)} className={styles.form}>
          <label className={styles.label}>
            <span>Username <span className={styles.required}>*</span></span>
            <input
              type="text"
              value={state.username}
              className={styles.textinput}
              onChange={(e) => dispatch({type: UPDATE_USERNAME, payload: e.target.value})}
              required
            />
          </label>
          <label className={styles.label}>
            <span>Password <span className={styles.required}>*</span></span>
            <input
              type="password"
              value={state.password}
              className={styles.textinput}
              onChange={(e) => dispatch({type: UPDATE_PASSWORD, payload: e.target.value})}
              required
            />
          </label>
          <label className={styles.label}>
            <span>Maiden Name <span className={styles.required}>*</span></span>
            <input
              type="text"
              value={state.maidenName}
              className={styles.textinput}
              onChange={(e) => dispatch({type: UPDATE_MAIDENNAME, payload: e.target.value})}
              required
            />
          </label>
          <label className={styles.label}>
            <span>E-mail address <span className={styles.required}>*</span></span>
            <input
              type="email"
              value={state.email}
              className={styles.textinput}
              onChange={(e) => dispatch({type: UPDATE_EMAIL, payload: e.target.value})}
              required
            />
          </label>
          <input
            type="submit"
            value="Sign up"
            className={styles.submitButton}
          />
        </form>
        }
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default SignUpCanvas;