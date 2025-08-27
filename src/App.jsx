import { useState } from 'react'
import './App.css'
import Bmw from './assets/Bmw.avif'
import palmeiras from './assets/palmeiras.avif'
import sapato from './assets/sapato.avif'
import Logo from './assets/pumabranc.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">
          {/* Card 1 */}
          <a href="#" className="link-card">
          <div className="card">
            <img src={Bmw} alt="" className="img-card"/>
            <h2>Tênis RS-X BMW M Motorsport Unissex</h2>
            <p className="desc"> Apresentando gráficos extraídos do design de ponta do carro e uma pintura renovada, esta coleção presta homenagem à velocidade, precisão e inovação que continuam a definir este ícone.</p>
            <p className="classificacao"> <span>★ ★ ★ ☆ ☆</span> (224)</p>
            <p className="preco">R$ 799,99</p>
            <p className="off">-5%</p>
          </div>
          </a>
          {/* card2 */}
          <a href="#" className="link-card">
          <div className="card">
            <img src={palmeiras} alt="" className="img-card"/>
            <h2>Moletom com Capuz SE Palmeiras ftblNRGY+ Masculino</h2>
            <p className="desc"> Comemore seu orgulho pelo Palmeiras com este moletom com capuz PUMA</p>
            <p className="classificacao"> <span>★ ★ ★ ★ ☆</span>  (504)</p>
            <p className="preco">R$ 749,99</p>
            <p className="off">-10%</p>
          </div>
          </a>
          {/* card3 */}
          <a href="#" className="link-card">
          <div className="card">
            <img src={sapato} alt="" className="img-card"/>
            <h2>Tênis RS-X Suede</h2>
            <p className="desc"> O RS-X está de volta. Essa silhueta retrô do futuro fez sucesso quando foi lançada em 2018, celebrada por seu design disruptivo</p>
            <p className="classificacao"> <span>★ ★ ★ ★ ★ </span> (954)</p>
            <p className="preco">R$ 649,99</p>
            <p className="off">-10%</p>
          </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/5hqEX3Kt560?autoplay=1&mute=1&controls=0&loop=1&playlist=5hqEX3Kt560&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>
        <footer>

        <img src={Logo} alt="" />
        <p className="txt-footer">PUMA SPORTS LTDA CNPJ 05.406.034/0023-00 Inscrição Estadual 278.205.224.119 Endereço: Rua Passadena 104 - Parque Industrial, Cotia - SP CEP: 06715864.</p>

        </footer>
      </main>
    </>
  )
}

export default App
