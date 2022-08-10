import { useContext, useState } from "react";
import { NavDropdown, Nav } from "react-bootstrap"
import AuthContext from "../../../utils/AuthContext";

import ProfileModal from "../../modals/ProfileModal/ProfileModal";
import Modal from "./../../modals/Modal";

function Signed() {

  const ctx = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);

  const logOutHandler = () => ctx.setAuthData({
    isAuthed: false,
    username: null,
    maidenName: null,
    email: null,
    image: null
  })

  return (
    <>
      <Modal>
        {showProfile && <ProfileModal show={showProfile} onHide={() => setShowProfile(false)}/>}
      </Modal>
      <NavDropdown title="Profile" id="collasible-nav-dropdown">
        <NavDropdown.Item onClick={() => setShowProfile(true)}>Show my profile</NavDropdown.Item>
        <NavDropdown.Item>Change credentials</NavDropdown.Item>
        <NavDropdown.Item>Beep-Beep</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logOutHandler}>Log out</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link>Posts</Nav.Link>
      <Nav.Link>Terms of use</Nav.Link>
    </>
  );
}

export default Signed;