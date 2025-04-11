import React, { Suspense } from 'react';

const RemoteHelloButton = React.lazy(() => import('app1/HelloButton'));
const RemoteGoodbyeButton = React.lazy(() => import('app1/GoodbyeButton'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-3xl font-bold mb-8 text-amber-900">
        App 2 ✨
      </h1>
    <div className="flex flex-col gap-4 w-full max-w-xs">
        <RemoteHelloButton onClick={() => alert('Oioi clicado no app 2! :D')} />
        <RemoteGoodbyeButton onClick={() => alert('Xauxau clicado no app 2! :D')} />
      </div>
    </div>
  );
};

export default App;