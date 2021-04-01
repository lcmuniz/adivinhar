import { useRef, useState } from 'react';

import './App.css';

let numero = Math.trunc(Math.random() * 100)

function App() {

  const [tentativas, setTentativas] = useState(0)
  const [mensagem, setMensagem] = useState('')
  const [acertou, setAcertou] = useState(false)

  const palpiteInput = useRef()

  function testarPalpite() {

    const palpite = Number(palpiteInput.current.value)

    if (palpite < numero) {
      setMensagem('Seu palpite é muito pequeno!')
    }
    else if (palpite > numero) {
      setMensagem('Seu palpite é muito grande!')
    }
    else {
      setMensagem('Você acertou!')
      setAcertou(true)
    }

    setTentativas(tentativas + 1)

  }

  function reiniciar() {
    setMensagem('')
    setAcertou(false)
    setTentativas(0)
    palpiteInput.current.value = ''
    palpiteInput.current.focus()
    numero = Math.trunc(Math.random() * 100)
  }

  return (
    <div className="container">
      <p className="fonte-maior">Em qual número eu estou pensando?</p>
      
      <div>
        <input ref={palpiteInput} className="numero" type="text" />
        <button className="enviar" onClick={testarPalpite}>Enviar</button>
      </div>

      <p className="fonte-maior">{mensagem}</p>

      { (acertou === true) ? 
        <button onClick={reiniciar}>Clique aqui para reiniciar</button> 
        : null }
      
      <p>Número de tentantivas: {tentativas}</p>
    </div>
  );
}

export default App;
