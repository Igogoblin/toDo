const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input value={text} onChange={(e) => handleInput(e.target.value)}></input>
      <button onClick={handleSubmit}>add todo</button>
    </label>
  );
};

export default InputField;
