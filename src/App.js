import React, { useEffect, useState } from 'react';

import './App.css';

const eventFn = () => {
  console.log('H1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /*   // componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });
*/

  // componentDidMount - executa 1x
  useEffect(() => {
    document.querySelector('h1').addEventListener('click', eventFn);
  }, []);

  // com dependencia - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log(`C1: ${counter} C2: ${counter2}`);
    // setCounter(counter + 1); // Loop infinito
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>
        C1: {counter} C2:{counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+(2)</button>
    </div>
  );
}

export default App;
