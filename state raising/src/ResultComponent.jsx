export default function ResultComponent({ text, isError }) {
  return (
    <div className={isError ? "result error" : "result ok"}>
      {text}
    </div>
  );
}
