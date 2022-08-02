import { useContext, useState } from "react";
import AuthContext from "../../../utils/AuthContext";
import Button from "../../controls/Button/Button";
import Modal from "../../modals/Modal";
import SignModal from "../../modals/SignModal/SignModal";
import styles from "./Header.module.scss";

function Header() {
  const ctx = useContext(AuthContext);
  const [modal, setModal] = useState(null);

  function registerHandler() {}

  return (
    <>
      <header>
        <div className={styles.space} />
        <div className={styles.container}>
          <h1>React-Blog</h1>
          {ctx.authData.isAuth ? (
            <></>
          ) : (
            <div>
              <Button handler={() => setModal("sign")} content="Sign In" />
              <Button handler={() => setModal("register")} content="Register" />
            </div>
          )}
        </div>
        <div className={styles.space} />
      </header>
      <Modal>
        {!modal ? null : modal === "sign" ? (
          <SignModal onClose={() => setModal(null)} />
        ) : null}
      </Modal>
    </>
  );
}

export default Header;
