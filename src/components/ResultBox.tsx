import { useState } from "react";

type ResultBoxProps = {
  result: string;
  error: string | null;
};

function ResultBox({ result, error }: ResultBoxProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      <label>Translation</label>

      {/* Error message */}
      {error && (
        <div
          style={{
            backgroundColor: "#fff5f5",
            border: "1px solid #fed7d7",
            borderRadius: "10px",
            padding: "12px 16px",
            marginTop: "6px",
            color: "#c53030",
            fontSize: "14px",
          }}
        >
          ⚠️ {error}
        </div>
      )}

      {/* Result area */}
      <div style={{ position: "relative", marginTop: "6px" }}>
        <textarea
          value={result}
          readOnly
          placeholder="Translation will appear here..."
          style={{
            backgroundColor: result ? "#f0fff4" : "#f7fafc",
            border: result ? "2px solid #9ae6b4" : "2px solid #e2e8f0",
            borderRadius: "10px",
            width: "100%",
            padding: "12px 14px",
            fontSize: "15px",
            fontFamily: "Inter, sans-serif",
            color: "#2d3748",
            resize: "vertical",
            minHeight: "130px",
            lineHeight: "1.6",
            outline: "none",
          }}
        />

        {/* Copy button */}
        {result && (
          <button
            onClick={handleCopy}
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
              padding: "6px 14px",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: "Inter, sans-serif",
              backgroundColor: copied ? "#48bb78" : "white",
              color: copied ? "white" : "#4a5568",
              border: "1px solid",
              borderColor: copied ? "#48bb78" : "#e2e8f0",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {copied ? "✓ Copied!" : "Copy"}
          </button>
        )}
      </div>
    </div>
  );
}

export default ResultBox;
