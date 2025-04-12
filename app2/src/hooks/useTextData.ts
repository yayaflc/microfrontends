import { useState, useEffect } from "react";

export function useTextData() {
  const [textData, setTextData] = useState("");

  useEffect(() => {
    const text = "Texto vindo diretamente do App2! ✍";
    setTextData(text);
  }, []);

  return textData;
}