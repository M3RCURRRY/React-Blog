import { useContext, useState } from "react";
import { Nav, Button, Offcanvas } from "react-bootstrap";
import SignInCanvas from "../Offcanvas/SignInCanvas/SignInCanvas";
import SignUpCanvas from "../Offcanvas/SignUpCanvas/SignUpCanvas";

function NotSigned() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const showSignInHandler = () => setShowSignIn(true);
  const closeSignInHandler = () => setShowSignIn(false);

  const showSignUpHandler = () => setShowSignUp(true);
  const closeSignUpHandler = () => setShowSignUp(false);

  return (
    <>
      <SignInCanvas show={showSignIn} onHide={closeSignInHandler}/>
      <SignUpCanvas show={showSignUp} onHide={closeSignUpHandler}/>
      <Nav.Link onClick={showSignInHandler}>Sign In</Nav.Link>
      <Nav.Link onClick={showSignUpHandler}>
        <b>Sign Up</b>
      </Nav.Link>
    </>
  );
}

export default NotSigned;
