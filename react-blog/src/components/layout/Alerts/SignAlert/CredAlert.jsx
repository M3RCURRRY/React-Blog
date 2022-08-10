import { Alert } from "react-bootstrap";

function SignAlert(props) {
  return(
    <Alert variant="danger" onClose={props.onClose}>
      <Alert.Heading>Incorrect username or password!</Alert.Heading>
      <p>
        The username or/and password data you entered are incorrect. Try again.
      </p>
    </Alert>
  )
}

export default SignAlert;