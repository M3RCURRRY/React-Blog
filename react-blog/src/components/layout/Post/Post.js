import useToggle from "../../../hooks/useToggle";
import styles from "./Post.module.scss";

function Post(props) {
  const [isCommentsToggled, toggleComments] = useToggle(false);
  let {title, body} = props;

  return(
    <section>
      <h2>{title}</h2>
      <div>
        {body}
      </div>
      <br/>
      <div>
        <button onClick={toggleComments}>Expand comments</button>
        {
          isCommentsToggled ? <h3>Comments</h3> : null
        }
      </div>
    </section>
  )
}

export default Post;