import React, { useState, useRef } from "react";

function TimerApp() {
  const [time, setTime] = useState(0); // Държи текущото време
  const intervalRef = useRef(null); // Референтен достъп до интервала

  const startTimer = () => {
    // ако вече има активен интервал, не правим нищо
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    // ако има активен интервал - спираме го
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    // спираме (ако работи) и връщаме на 0
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTime(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Таймер: {time} сек</h1>
      <button onClick={startTimer}>Старт</button>
      <button onClick={pauseTimer}>Пауза</button>
      <button onClick={resetTimer}>Нулиране</button>
    </div>
  );
}

export default TimerApp;