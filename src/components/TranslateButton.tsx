type TranslateButtonProps = {
  onTranslate: () => void;
  loading: boolean;
};

function TranslateButton({ onTranslate, loading }: TranslateButtonProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={onTranslate}
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          fontSize: "16px",
          fontWeight: "600",
          fontFamily: "Inter, sans-serif",
          color: "white",
          background: loading
            ? "#a0aec0"
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
          borderRadius: "10px",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "opacity 0.2s ease, transform 0.1s ease",
          letterSpacing: "0.02em",
        }}
        onMouseEnter={(e) => {
          if (!loading) e.currentTarget.style.opacity = "0.9";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
        onMouseDown={(e) => {
          if (!loading) e.currentTarget.style.transform = "scale(0.98)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {loading ? "⏳  Translating..." : "Translate →"}
      </button>
    </div>
  );
}

export default TranslateButton;
