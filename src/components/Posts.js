const Posts = (props) => {
  return (
    <div className="posts">
      {props.posts.map((post) => (
        <div className="post-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p> Author: {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
