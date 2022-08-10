import { Alert } from "react-bootstrap";

function NoUserFoundAlert(props) {
  return (
    <Alert variant="danger" onClose={props.onClose}>
      <Alert.Heading>No such user exists!</Alert.Heading>
      <p>Check your credentials and try again.</p>
    </Alert>
  );
}

export default NoUserFoundAlert;
