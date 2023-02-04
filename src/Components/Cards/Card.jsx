import scss from "./Card.module.scss"

import icon_heart from "./img/icon_heart.svg"
import Iced_Coffee from "./img/Iced_Coffee.png"
import arrow from "./img/Arrow7.svg"
import Header from "../Header/Header"

function Card() {
  return (
    <>
    
      <div className={scss.card}>
        <p className={scss.pName}>СВЕЖЕОБЖАРЕННЫЙ КОФЕ</p>
        <div className={scss.beetwen}>

          <div className={scss.left}>
            <img className={scss.iced} src={Iced_Coffee} />
            <div className={scss.calculate}>
              <div>-</div>
              <div>1</div>
              <div>+</div>
            </div>
            <div>
              <p>Кислинка</p>
              <p>Горчинка</p>
              <p>Насыщенность</p>
            </div>
            <button className={scss.gram} >
              <div> 450 г <img src={arrow} /></div>
            </button>
            <br />
            <button className={scss.basket}>в корзину</button>
          </div>



          <div className={scss.right}>
            <div>
              <p className={scss.Brazil}>Бразилия Сантос </p>
              <p className={scss.orange}>
                Темный шоколад,
                жареный фундук,
                лакричная конфета
              </p>
              <p className={scss.seven}>790 ₽</p>
            </div>

            <div className={scss.pDiv}>
              <p>00000</p>

              <button className={scss.zerna}>в зернах <img src={arrow} /></button>
            </div>
            <br />
            <button>
              <img src={icon_heart} />
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Card