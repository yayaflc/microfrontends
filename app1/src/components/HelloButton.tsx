import React from 'react';

type Props = {
  onClick?: () => void;
};

const HelloButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
    onClick={onClick}
    className="w-full bg-amber-800 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 text-center transition duration-300 ease-in-out"
  >
    <span className="text-lg">Oioi do App1 ✌</span>
  </button>
  );
};

export default HelloButton;
