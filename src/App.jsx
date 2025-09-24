import { useState } from 'react'
import './App.css'
import suedAlien1 from './assets/Kone1.jpg'
import suedAlien2 from './assets/Kone2.jpg'
import suedAlien3 from './assets/Pego1.jpg'
import LogoPuma from './assets/Car.webp'
import LogoInsta from './assets/instagram.svg'
import LogoDiscord from './assets/discord.svg'
import LogoWhats from './assets/whatsapp.svg'
import Slider1 from './assets/1.jpg'
import Slider2 from './assets/2.jpg'
import Slider3 from './assets/3.jpg'
import Slider4 from './assets/4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          {/* Aqui fica o SLIDER */}  
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider4} alt="" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">
          
          {/* Card 1 */}
          <a href="https://lojaautoformula.com.br/products/miniatura-1-24-koenigsegg-jesko-hypercar-2024?srsltid=AfmBOoqUdTwG_zPO3iqz2lpdnwxRtgDvlRh3qy-WLK-HjAL1YMtOqBa5" className="link-card" target="_blank">
            <div className="card">
              <img src={suedAlien1} alt=""  className="img-card"/>
              <h2>Koenigsegg Regera roxo</h2>
              <p className="desc">motor V8 biturbo de 5.0 litros com três motores elétricos para uma potência combinada de 1.500 cv e mais de 200 mkgf de torque</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (479)</p>
              <p className="preco">R$8.000.000,00</p>
              <p className="off">- 15%</p>
            </div>
          </a>

          {/* Card 2 */}
          <a href="https://www.koenigsegg.com/model/sadairs-spear" className="link-card" target="_blank">
            <div className="card">
              <img src={suedAlien2} alt="" className="img-card"/>
              <h2>koenigsegg soldier's spear</h2>
              <p className="desc">motor V8 de 5.0 litros biturbo, que gera 1.318 cv com gasolina comum e 1.648 cv com E85</p>
              <p className="classificacao"> <span>★ ★ ★ ☆ ☆</span> (479)</p>
              <p className="preco">R$10.000.000,99</p>
              <p className="off">- 2%</p>
            </div>
          </a>

          {/* Card 3 */}
          <a href="https://www.mercadolivre.com.br/peugeot-206-5-door-verde-124-shadow-164/up/MLBU3392328114#polycard_client=search-nordic&search_layout=stack&position=16&type=product&tracking_id=1b3d4ec4-a208-4ba2-9f6d-5f59d23de4ae&wid=MLB4181194363&sid=search" className="link-card" target="_blank">
            <div className="card">
              <img src={suedAlien3} alt="" className="img-card"/>
              <h2>peugeot</h2>
              <p className="desc">v12, turbinado com 4 turbinas, escape esportivo,radiador esportivo,pneu de corrida, 12000 cavalos de roda</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ★ ★ </span> (479)</p>
              <p className="preco">R$20.000.000,00</p>
              <p className="off">- 4%</p>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/QXb5oI4l9wk?autoplay=1&mute=1&controls=0&loop=1&playlist=QXb5oI4l9wk&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>

        <footer>

          <img src={LogoPuma} alt="" className="logo-footer" />

          <div className="social-footer">
            <div className="icon-social">
              <a href="https://www.instagram.com/pumabrasil/" target="_blank">
                <img src={LogoInsta} alt="" className="instagram" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://discord.com/invite/puma" target="_blank">
                <img src={LogoDiscord} alt="" className="discord" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://web.whatsapp.com/" target="_blank">
                <img src={LogoWhats} alt="" className="whatsapp" />
              </a>
            </div>
          </div>

          <p className="txt-footer">
            Auto SPORTS LTDA CNPJ 05.406.034/0023-00 Inscrição Estadual 278.205.224.119 Endereço: Rua Passadena 104 - Parque Industrial, Cotia - SP CEP: 06715864.
          </p>

        </footer>
      </main>
    </>
  )
}

export default App
