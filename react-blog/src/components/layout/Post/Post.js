import styles from "./Post.module.scss";

function Post(props) {
  return(
    <section>
      <h2>{props.title}</h2>
      <div>
        {props.body}
      </div>
    </section>
  )
}

export default Post;