import React from 'react';
import Header from './Header';
import KegControl from "./KegControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className='container' id="kegControlBg">
        <KegControl />
      </div>
    </React.Fragment>
  );
}

export default App;
