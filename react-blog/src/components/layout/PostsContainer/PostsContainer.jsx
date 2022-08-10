import Modal from "../../modals/Modal";
import Post from "../Post/Post";

function PostsContainer(props) {
  const posts = props.posts;

  return (
    <>
      {posts.map((item, index) => {
        const {id, ...data} = item;
        return (
          <Post key={id} data={data}/>
        );
      })}
    </>
  );
}

export default PostsContainer;