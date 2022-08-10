import { useEffect, useState } from "react";
import { Modal, Spinner, Button } from "react-bootstrap";
import { useMedia } from "../../../hooks/useMedia";

import styles from "./ForeignUserModal.module.scss";

let user = null;

function ForeignUserModal(props) {
  const {isPortraitMobile, ...other} = useMedia();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${props.userId}`)
    .then(resp => resp.json())
    .then(json => {
      user = json;
      setLoading(false);
    })
  }, [])

  return(
    <Modal show={props.show} onHide={props.onHide}>
      {
        isLoading ? <Spinner animation="border" variant="dark" className={styles.spinnerMargin}/>
        :
        (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{user.maidenName}'s profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className={isPortraitMobile ? styles.mobileLayout : styles.wideLayout}>
                <div className={isPortraitMobile ? styles.mobileAvatar : styles.wideAvatar}>
                  <img src={user.image} className={isPortraitMobile ? styles.mobileImage : styles.wideImage}/>
                </div>
                <div className={isPortraitMobile ? styles.mobileUserdata : styles.wideUserdata}>
                  <span><b>Visible name:</b> {user.maidenName}</span>
                  <span><b>{user.maidenName}'s e-mail:</b> {user.email}</span>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={props.onHide}>Close profile</Button>
            </Modal.Footer>
          </>
        )
      }
    </Modal>
  )
}

export default ForeignUserModal;