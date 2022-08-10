import { Modal, Button } from "react-bootstrap";

import styles from "./ProfileModal.module.scss";
import { useMedia } from "./../../../hooks/useMedia"
import { useContext } from "react";
import AuthContext from "../../../utils/AuthContext";

function ProfileModal(props) {

  const ctx = useContext(AuthContext);
  const {isPortraitMobile, ...other} = useMedia();

  const {isAuthed, username, maidenName, image, email} = ctx.authData;

  return(
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Your profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={isPortraitMobile ? styles.mobileLayout : styles.wideLayout}>
          <div className={isPortraitMobile ? styles.mobileAvatar : styles.wideAvatar}>
            <img src={image} className={isPortraitMobile ? styles.mobileImage : styles.wideImage}/>
          </div>
          <div className={isPortraitMobile ? styles.mobileUserdata : styles.wideUserdata}>
            <span><b>Your username:</b> {username}</span>
            <span><b>Your visible name:</b> {maidenName}</span>
            <span><b>Your e-mail:</b> {email}</span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>Close profile</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProfileModal;