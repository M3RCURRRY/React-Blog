import styles from "./Post.module.scss";
import { useMedia } from "./../../../hooks/useMedia";
import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import ForeignUserModal from "../../modals/ForeignUserModal/ForeignUserModal";
import Modal from "../../modals/Modal";

function Post(props) {
  const [showAuthor, setShowAuthor] = useState(false);
  const { title, body, userId, tags, reactions } = props.data;

  useEffect(() => {
    return () => setShowAuthor(false);
  }, []);

  const { isPortraitMobile, isLandscapeMobile, isTablet, ...other } =
    useMedia();

  return (
    <>
      {showAuthor && (
        <Modal>
          <ForeignUserModal
            show={showAuthor}
            onHide={() => setShowAuthor(false)}
            userId={userId}
          />
        </Modal>
      )}
      <section
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
