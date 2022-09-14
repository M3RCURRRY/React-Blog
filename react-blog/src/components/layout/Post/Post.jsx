import styles from "./Post.module.scss";
import { useMedia } from "./../../../hooks/useMedia";
import { useContext, useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import ForeignUserModal from "../../modals/ForeignUserModal/ForeignUserModal";
import Modal from "../../modals/Modal";
import AuthContext from "../../../utils/AuthContext";

function Post(props) {
  const ctx = useContext(AuthContext);
  const isAuthed = ctx.authData.isAuthed;
  const [showAuthor, setShowAuthor] = useState(false);
  const { title, body, userId, tags, reactions } = props.data;

  const expandHandler = (e) => {
    if (e.target.id !== "author") {
      console.log("Aboba");
    }
  }

  useEffect(() => {
    return () => setShowAuthor(false);
  }, []);

  const { isPortraitMobile, isLandscapeMobile, isTablet, ...other } =
    useMedia();

  return (
    <>
      {showAuthor && isAuthed && (
        <Modal>
          <ForeignUserModal
            show={showAuthor}
            onHide={() => setShowAuthor(false)}
            userId={userId}
          />
        </Modal>
        )
      }
      <section
        onClick={(e) => expandHandler(e)}
        className={
          isPortraitMobile
            ? styles.mobilePost
            : isTablet || isLandscapeMobile
            ? styles.tabletPost
            : styles.desktopPost
        }
      >
        <div>
          <h4
            className={
              isPortraitMobile
                ? styles.mobileHeader
                : isTablet || isLandscapeMobile
                ? styles.tabletHeader
                : styles.desktopHeader
            }
          >
            {title}
          </h4>
          <div className={styles.limiter}></div>
          <p className={styles.postBody}>{body.slice(0, 100)} ...</p>
        </div>
        <div className={styles.postFooter}>
          <span
            id="author"
            onClick={() => setShowAuthor(true)}
            className={styles.authorLink}
          >
            Check author's profile
          </span>
          <div className={styles.tags}>
            <h6 className={styles.tag}>Tags:</h6>
            {tags.map((item, index) => {
              return (
                <h6 key={index} className={styles.tag}>
                  <Badge bg="primary">{item}</Badge>
                </h6>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Post;
