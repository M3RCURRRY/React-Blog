import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import Post from "../Post/Post";
import styles from "./ContentArea.module.scss";

function ContentArea() {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=15")
    .then(resp => resp.json())
    .then(json => setPosts(json));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.space} />
      <div className={styles.container}>
        {
          posts === null ? <div className={styles.spinner}/> :
          posts.map((item, index) => {
            return <Post key={item.id} title={item.title} body={item.body}/>
          })
        }
      </div>
      <div className={styles.space} />
    </div>
  );
}

export default ContentArea;
