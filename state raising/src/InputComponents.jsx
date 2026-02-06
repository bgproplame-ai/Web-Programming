export default function InputComponent({
  num1,
  num2,
  operation,
  onNum1Change,
  onNum2Change,
  onOperationChange,
}) {
  return (
    <div className="inputs">
      <label className="field">
        Първо число:
        <input
          className="input"
          type="number"
          value={num1}
          onChange={(e) => onNum1Change(e.target.value)}
          placeholder="въведи число"
        />
      </label>

      <label className="field">
        Второ число:
        <input
          className="input"
          type="number"
          value={num2}
          onChange={(e) => onNum2Change(e.target.value)}
          placeholder="въведи число"
        />
      </label>

      <label className="field">
        Операция:
        <select
          className="select"
          value={operation}
          onChange={(e) => onOperationChange(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </label>
    </div>
  );
}
