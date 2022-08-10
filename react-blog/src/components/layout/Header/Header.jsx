import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import styles from "./Header.module.scss";
import NotSigned from "../NavbarContent/NotSigned";
import { useContext } from "react";
import AuthContext from "../../../utils/AuthContext";
import Signed from "../NavbarContent/Signed";

function Header() {
  const ctx = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className={styles.navi}>
      <Navbar.Brand>React-Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {ctx.authData.isAuthed ? <Signed/> : <NotSigned/>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
