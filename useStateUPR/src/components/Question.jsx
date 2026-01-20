export default function Question({ question, index, total, onAnswer }) {
  return (
    <>
      <h2>Въпрос {index + 1} / {total}</h2>
      <p>{question.text}</p>

      <button onClick={onAnswer}>
        {question.answers[0]}
      </button>

      <button onClick={onAnswer}>
        {question.answers[1]}
      </button>

      <button onClick={onAnswer}>
        {question.answers[2]}
      </button>
    </>
  );
}
