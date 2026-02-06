import { useMemo, useState } from "react";
import InputComponent from "./InputComponents";
import ResultComponent from "./ResultComponent";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");

  const { resultText, isError } = useMemo(() => {
    if (num1 === "" || num2 === "") {
      return { resultText: "Въведи две числа.", isError: false };
    }

    const a = Number(num1);
    const b = Number(num2);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      return { resultText: "Моля, въведи валидни числа.", isError: true };
    }

    if (operation === "/" && b === 0) {
      return { resultText: "Грешка: деление на 0 е невъзможно!", isError: true };
    }

    let res = 0;
    switch (operation) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = a / b;
        break;
      default:
        return { resultText: "Непозната операция.", isError: true };
    }

    return { resultText: `Резултат: ${res}`, isError: false };
  }, [num1, num2, operation]);

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Калкулатор</h1>

        <InputComponent
          num1={num1}
          num2={num2}
          operation={operation}
          onNum1Change={setNum1}
          onNum2Change={setNum2}
          onOperationChange={setOperation}
        />

        <ResultComponent text={resultText} isError={isError} />
      </div>
    </div>
  );
}
