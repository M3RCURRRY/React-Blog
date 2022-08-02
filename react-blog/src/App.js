import { useState } from "react";
import styles from "./App.module.css";
import ContentArea from "./components/layout/ContentArea/ContentArea";
import Header from "./components/layout/Header/Header";
import AuthContext from "./utils/AuthContext";

const auth = {
  isAuth: false,
  username: null,
  isAdmin: false,
};

function App() {
  const [authData, setAuthData] = useState(auth);
  const [modal, setModal] = useState(null);

  /*
  <button onClick={() => setAuthData({ ...authData, isAuth: true })}>
            Auth Me!
          </button>
  */

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      <div className={styles.fixedBackground}>
        <div className={styles.layout}>
          <Header />
          <ContentArea />
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
