import { useState } from "react";
import styles from "./App.module.css";
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

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      <div className={styles.fixedBackground}>
        <div className={styles.layout}>
          <Header />
          <button onClick={() => setAuthData({ ...authData, isAuth: true })}>
            Auth Me!
          </button>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
