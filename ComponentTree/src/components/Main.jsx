import Sidebar from "./Sidebar";
import Content from "./Content";

export default function Main(props) {
  return (
    <main className="main">
      <Sidebar />
      {/* взимаме posts от App и ги даваме на Content */}
      <Content posts={props.posts} />
    </main>
  );
}
