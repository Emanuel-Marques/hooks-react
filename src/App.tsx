import { useState } from 'react';
import './App.css';

function App() {
  // Hook do exercicio de imagem
  // const [showImg, setShowImg] = useState(true);
  // Hook do exercicio caroussel
  const [index, setIndex] = useState(0);
  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  function handleNextClick() {
    if (index + 1 > toolKit.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function handlePreviousClick() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(toolKit.length - 1);
    }
  }
  // Função para alterar o estado da imagem
  // function handleClick() {
  //   setShowImg(!showImg);
  // }

  return (
    // Aprendendo sobre Hooks parte 1
    // <div className="card">
    //   { showImg && <img src="/trybe.png" alt="imagem da trybe" /> }
    //   <br />
    //   <button onClick={ handleClick }>
    //     {showImg ? 'Esconder imagem' : 'Mostar imagem'}
    //   </button>
    // </div>
    // Exercicio de Caroussel
    <>
      <h1>Caixa de ferramentas de uma pessoa desenvolvedora</h1>
      <h2>
        { toolKit[index] }
      </h2>
      <button onClick={ handlePreviousClick }>Anterior</button>
      <button onClick={ handleNextClick }>Próximo</button>
      <section>
        <h3>Adicione novas ferramentas</h3>
        <input />
        <button>Adicionar</button>
      </section>
    </>

  );
}

export default App;
