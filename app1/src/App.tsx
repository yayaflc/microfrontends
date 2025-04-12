import React from "react";
import TextData from "./components/TextData";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-purple-900 mb-8">App 1 ✨</h1>
      <TextData />
    </div>
  );
};

export default App;