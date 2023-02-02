import scss from "./gridCoffe.module.scss"

import one from "./img/1.png"
import two from "./img/2.png"
import three from "./img/3.png"
import four from "./img/4.png"

function Grid2() {
  return (
    <div className="container">
      <div className={scss.grid}>

        <div className={scss.main}>
          <img src={one} />
          <div className={scss.between}>
            <div>
              КОФЕ. СОРТ И ОБЖАРКА
            </div>
            <p>
              Свежий зерновой кофе, с оперативной доставкой по оптовой цене.
            </p>
          </div>
        </div>

        <div className={scss.main}>
          <img src={two} />
          <div className={scss.between}>
            <div>
              ОБУЧЕНИЕ
            </div>
            <p>
              Обучим Вас и ваших ребят в Школе бариста Coffeelogia. От теории к практике.
            </p>
          </div>
        </div>

        <div className={scss.main} >
          <img src={three} />
          <div className={scss.between}>
            <div>ОБОРУДОВАНИЕ</div>
            <p>
              Предоставим профессиональное кофейное оборудование в аренду или на продажу.
            </p>
          </div>
        </div>

        <div className={scss.main}>
          <img src={four} />
          <div className={scss.between}>
            <div>
              СЕРВИС
            </div>
            <p>
              Установка и сервис профессионального оборудования. Собственный склад запчастей обеспечивает оперативный и качественный ремонт с гарантией.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Grid2