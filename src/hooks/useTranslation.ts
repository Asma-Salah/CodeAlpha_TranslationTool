import { useState } from "react";

function useTranslation() {
  // ── STATE ──────────────────────────────────────────
  const [inputText, setInputText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("sw");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ── TRANSLATION LOGIC ──────────────────────────────
  async function handleTranslate() {
    if (!inputText.trim()) {
      setError("Please enter some text to translate.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult("");

    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${sourceLang}|${targetLang}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.responseStatus === 200) {
        setResult(data.responseData.translatedText);
      } else {
        setError("Translation failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  // ── RETURN EVERYTHING APP NEEDS ────────────────────
  return {
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
  };
}

export default useTranslation;
