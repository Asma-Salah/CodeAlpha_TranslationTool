import useTranslation from "./hooks/useTranslation";
import LanguageBar from "./components/LanguageBar";
import InputBox from "./components/InputBox";
import TranslateButton from "./components/TranslateButton";
import ResultBox from "./components/ResultBox";

function App() {
  const {
    inputText,
    setInputText,
    sourceLang,
    setSourceLang,
    targetLang,
    setTargetLang,
    result,
    loading,
    error,
    handleTranslate,
  } = useTranslation();

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "620px",
      }}
    >
      {/* Card */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "36px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontSize: "36px", marginBottom: "8px" }}>🌐</div>
          <h1
            style={{
              fontSize: "26px",
              fontWeight: "700",
              color: "#1a202c",
              marginBottom: "6px",
            }}
          >
            Language Translation Tool
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "#a0aec0",
              fontWeight: "400",
            }}
          >
            Translate instantly across languages
          </p>
        </div>

        <LanguageBar
          sourceLang={sourceLang}
          targetLang={targetLang}
          onSourceChange={setSourceLang}
          onTargetChange={setTargetLang}
        />

        <InputBox inputText={inputText} onInputChange={setInputText} />

        <TranslateButton onTranslate={handleTranslate} loading={loading} />

        <ResultBox result={result} error={error} />
      </div>

      {/* Footer */}
      <p
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.6)",
          fontSize: "13px",
          marginTop: "20px",
        }}
      >
        Powered by MyMemory Translation API
      </p>
    </div>
  );
}

export default App;
