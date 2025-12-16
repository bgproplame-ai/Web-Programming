import PostList from "./PostList";

export default function Content(props) {
  return (
    <section className="content">
      <h2>Постове</h2>
      <PostList posts={props.posts} />
    </section>
  );
}
