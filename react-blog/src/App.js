import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/layout/Header/Header";
import PostsPage from "./components/pages/PostsPage/PostsPage";
import AuthContext from "./utils/AuthContext";

const auth = {
  isAuthed: false,
  username: null,
  maidenName: null,
  image: null,
  email: null,
};

function App() {
  const [authData, setAuthData] = useState(auth);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      <BrowserRouter>
        <div className={styles.layout}>
          <Header />
          <Switch>
            <Route path="/">
              <PostsPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

let t = {
  id: 1,
  title: "His mother had always taught him",
  body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  userId: 9,
  tags: ["history", "american", "crime"],
  reactions: 2,
};
