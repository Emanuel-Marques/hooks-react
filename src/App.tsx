import { useState } from 'react';
import './App.css';

function App() {
  const [showImg, setShowImg] = useState(true);

  function handleClick() {
    setShowImg(!showImg);
  }

  return (
    <div className="card">
      { showImg && <img src="/trybe.png" alt="imagem da trybe" /> }
      <button onClick={ handleClick }>
        {showImg ? 'Esconder imagem' : 'Mostar imagem'}
      </button>
    </div>
  );
}

export default App;
