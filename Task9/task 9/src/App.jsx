import User from "./components/User.jsx";
import "./index.css";
import pic1 from "./assets/407129667.jpg";
import pic2 from "./assets/images.jpg";


function App() {
  return (
    <div>
      <User
        firstName="Гошо"
        lastName="Тошо"
        classInfo="11 клас"
        number="№12"
        image= {pic1}
      />

      <User
        firstName="Иван"
        lastName="Иванов"
        classInfo="9 клас"
        number="№5"
        image={pic2}
      />
    </div>
  );
}

export default App;
