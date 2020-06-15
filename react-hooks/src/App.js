import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);
  // pode ser utilizada para funções que não precisam ser montadas sempre que um valor alterar
  // so vai ser recriada quando as variaveis newTech, tech sofrerem alterações
  // utilizada apenas em funções que utilizam estados ou propriedades do proprio compoente

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []); // componentDidAmmount

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]); // componentDidUpdate

  const techSize = useMemo(() => tech.length, [tech]);
  // so altera a variavel caso tech mude
  // indicada para cálculos mais complexos
  // não é necessário renderiar a página sempre

  return (
    <>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={(e) => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
