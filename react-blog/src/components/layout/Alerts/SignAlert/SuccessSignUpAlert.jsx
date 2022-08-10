import { Alert } from "react-bootstrap";

function SuccessSignUpAlert(props) {
  return (
    <Alert variant="success" onClose={props.onClose}>
      <Alert.Heading>Successfully signed up!</Alert.Heading>
      <p>Now you can use your credentials to sign in.</p>
    </Alert>
  );
}

export default SuccessSignUpAlert;