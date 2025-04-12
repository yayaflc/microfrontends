import React, { Suspense } from "react";

// importa hook diretamente
import { useTextData } from "app2/useTextData";

const TextData: React.FC = () => {
  const text = useTextData(); // chamado dentro de componente

  return (
    <div className="bg-purple-100 p-6 rounded-2xl shadow-xl w-full max-w-lg">
      <textarea
        className="w-full p-4 text-purple-900 bg-purple-50 border border-purple-300 rounded-lg resize-none shadow-inner"
        rows={6}
        readOnly
        value={text}
      />
    </div>
  );
};


export default TextData;