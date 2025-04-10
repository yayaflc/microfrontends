import React, { Suspense } from 'react';

const RemoteHelloButton = React.lazy(() => import('app1/HelloButton'));
const RemoteGoodbyeButton = React.lazy(() => import('app1/GoodbyeButton'));

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>App 2</h1>
      <div>
        <RemoteHelloButton onClick={() => alert('Clicado no app 2! :D')} />
        <RemoteGoodbyeButton onClick={() => alert('Clicado no app 2! :D')} />
      </div>
    </div>
  );
};

export default App;