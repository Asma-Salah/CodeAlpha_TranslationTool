type LanguageBarProps = {
  sourceLang: string;
  targetLang: string;
  onSourceChange: (lang: string) => void;
  onTargetChange: (lang: string) => void;
};

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "sw", name: "Swahili" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "ar", name: "Arabic" },
  { code: "es", name: "Spanish" },
  { code: "zh", name: "Chinese" },
  { code: "pt", name: "Portuguese" },
  { code: "hi", name: "Hindi" },
  { code: "it", name: "Italian" },
];

function LanguageBar({
  sourceLang,
  targetLang,
  onSourceChange,
  onTargetChange,
}: LanguageBarProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "end",
        gap: "12px",
        marginBottom: "20px",
      }}
    >
      {/* Source language */}
      <div>
        <label>From</label>
        <select
          value={sourceLang}
          onChange={(e) => onSourceChange(e.target.value)}
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      {/* Swap icon in the middle */}
      <div
        style={{
          fontSize: "20px",
          paddingBottom: "10px",
          color: "#a0aec0",
          userSelect: "none",
        }}
      >
        ⇄
      </div>

      {/* Target language */}
      <div>
        <label>To</label>
        <select
          value={targetLang}
          onChange={(e) => onTargetChange(e.target.value)}
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default LanguageBar;
