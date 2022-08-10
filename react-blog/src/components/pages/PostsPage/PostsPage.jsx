import { useEffect, useLayoutEffect, useState } from "react";
import { useMedia } from "../../../hooks/useMedia";
import styles from "./PostsPage.module.scss";
import { Spinner } from "react-bootstrap";
import PostsContainer from "../../layout/PostsContainer/PostsContainer";

const searchByFilter = (posts, filter) => {
  return posts.filter(item => item.title.concat(item.body).includes(filter));
}

function PostsPage() {
  const {isPortraitMobile, isLandscapeMobile, isTablet, ...other} = useMedia();
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");

  function searchHandler(e) {
    setFilter(e.target.value);
  }

  useLayoutEffect(() => {
    fetch("https://dummyjson.com/posts")
    .then(resp => resp.json())
    .then(json => {
      setPosts(json.posts);
      setLoading(false);
    });
  }, [])

  return (
    <main className={styles.postsPage}>
      { !isPortraitMobile && <div className={(isTablet || isLandscapeMobile) ? styles.tabletSpace : styles.desktopSpace}/>}
      <div className={isPortraitMobile ? styles.mobileContainer : (isTablet || isLandscapeMobile) ? styles.tabletContainer : styles.desktopContainer }>
        <input type="text" value={filter} placeholder="Write a post filter here" onChange={(e) => searchHandler(e)} className={styles.textinput}/> 
        <div className={styles.wrapper}>
          {
            isLoading ? 
            <Spinner animation="border" variant="dark" className={styles.spinnerMargin}/> 
            :
            <PostsContainer posts={searchByFilter(posts, filter)}/>
          }
        </div>
      </div>
      { !isPortraitMobile && <div className={(isTablet || isLandscapeMobile) ? styles.tabletSpace : styles.desktopSpace}/>}
    </main>
  )
}

export default PostsPage;