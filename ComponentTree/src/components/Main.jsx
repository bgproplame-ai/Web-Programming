import Sidebar from "./Sidebar";
import Content from "./Content";

export default function Main(props) {
  return (
    <main className="main">
      <Sidebar />
      <Content posts={props.posts} />
    </main>
  );
}
