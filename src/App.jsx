import { useState } from 'react'
import './App.css'
import Bmw from './assets/Bmw.avif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">
          {/* Card 1 */}
          <div className="card">
            <img src={Bmw} alt="" />
            <h2>Tênis RS-X BMW M Motorsport Unissex</h2>
            <p className="desc"> Apresentando gráficos extraídos do design de ponta do carro e uma pintura renovada, esta coleção presta homenagem à velocidade, precisão e inovação que continuam a definir este ícone.</p>
            <p className="classificacao"> ★ ★ ★ ★ ☆ (224)</p>
            <p className="preco">R$ 799,99</p>
            <p className="off">5%</p>
          </div>

        </section>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
