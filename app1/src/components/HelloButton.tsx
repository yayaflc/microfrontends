import React from 'react';

type Props = {
  onClick?: () => void;
};

const HelloButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button 
        onClick={onClick} 
        style={{ padding: '10px 20px', fontSize: '16px' }}
    >
      Oioi do App1
    </button>
  );
};

export default HelloButton;
