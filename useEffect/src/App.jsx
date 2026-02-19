import React, { useState, useEffect } from "react";

const App = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://meowfacts.herokuapp.com/");
      const data = await response.json();
      setFact(data.data[0]);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const loadInitialFact = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://meowfacts.herokuapp.com/");
        const data = await response.json();
        setFact(data.data[0]);
      } catch (error) {
        console.error("Error fetching cat fact:", error);
      }
      setLoading(false);
    };

    loadInitialFact();
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <div className="relative bg-black/50 border border-gray-600/50 text-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold">🐱 Random Cat Fact</h1>

        <div className="mt-4 min-h-[60px]">
          {loading ? (
            <p>⏳ Fetching new fact...</p>
          ) : (
            <p>{fact}</p>
          )}
        </div>

        <button
          onClick={fetchFact}
          disabled={loading}
          className="mt-6 px-6 py-2 bg-blue-500 rounded-lg"
        >
          {loading ? "Fetching..." : "Нов факт"}
        </button>
      </div>
    </div>
  );
};

export default App;