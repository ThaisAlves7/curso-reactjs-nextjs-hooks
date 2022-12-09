import P from 'prop-types';
import React, { memo, useCallback, useEffect, useState } from 'react';
import './App.css';

// memo => memoriza se o componente foi alterado [Somente atualiza caso o componente seja alterado]
const Button = memo(function Button({ incrementButton }) {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementButton(100)}>+</button>;
});

function App() {
  const [counter, setCounter] = useState(0);

  // Remove a dependência para impedir a renderização de componentes de forma desnecessária
  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai, renderizou');
  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

Button.propTypes = {
  incrementButton: P.func,
};

export default App;
