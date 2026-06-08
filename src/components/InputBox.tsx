type InputBoxProps = {
  inputText: string;
  onInputChange: (text: string) => void;
};

function InputBox({ inputText, onInputChange }: InputBoxProps) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label>Text to Translate</label>

      <textarea
        value={inputText}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Type or paste your text here..."
      />

      {/* Character count */}
      <p
        style={{
          textAlign: "right",
          fontSize: "12px",
          color: inputText.length > 450 ? "#e53e3e" : "#a0aec0",
          marginTop: "4px",
        }}
      >
        {inputText.length} / 500
      </p>
    </div>
  );
}

export default InputBox;
