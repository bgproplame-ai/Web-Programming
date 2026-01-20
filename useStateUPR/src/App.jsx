import { useState } from "react";
import Question from "./components/Question";
import questions from "./components/questions";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [currentIndex, setCurrentIndex] = useState(0);

  const startTest = () => {
    setScreen("quiz");
    setCurrentIndex(0);
  };

  const handleAnswer = () => {
    if (currentIndex + 1 >= questions.length) {
      setScreen("end");
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const restartTest = () => {
    setScreen("start");
    setCurrentIndex(0);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center", width: 2000 }}>
        {screen === "start" && (
          <>
            <h2>Логически тест</h2>
            <p>Натисни бутона, за да започнеш.</p>
            <button onClick={startTest}>Започни теста</button>
          </>
        )}

        {screen === "quiz" && (
          <Question
            question={questions[currentIndex]}
            index={currentIndex}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        )}

        {screen === "end" && (
          <>
            <h2>Тестът е завършен!</h2>
            <p>Браво, отговори на всички въпроси.</p>
            <button onClick={restartTest}>Започни отначало</button>
          </>
        )}
      </div>
    </div>
  );
}
