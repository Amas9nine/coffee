import scss from "./gridCoffe.module.scss"

import one from "./img/1.png"
import two from "./img/2.png"
import three from "./img/3.png"
import four from "./img/4.png"

import img from "./img/unsplash_SCbq6uKCyMY.png";



function Grid2() {
  return (
    <div className="container">

    

      {/* Grid coffe */}
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

      {/* orange */}
      <div className={scss.bg}></div>

      {/* coffe0 */}
      <div className={scss.cont}>
        <div>
          <div className={scss.five}>
            5 шагов к вкусу и бодрости. Производственные тонкости
          </div>

          <div className={scss.beetween}>
            <div>
              <img src={img} />
            </div>
            <div>
              <b>Закупка зерен.</b>
              Заказываем партию сырья у проверенных поставщиков с фитосанитарными сертификатами, берем пробы. Проверяем уровень влажности.
              Обжарка. Сложный технологический процесс обжарки по строгому протоколу на современном автоматизированном оборудовании обеспечит наилучший результат готового жаренного зерна.
              <br />
              <b>Обработка.</b>
              Очищаем кофе через Дестонер для отделения посторонних фракций. Для дегазации выдерживаем зерна 3–5 дней. Проводим регулярный каппинг – дегустация кофе, для утверждения стабильного результата.
              Фасовка. Упаковываем кофе в специализированные трехслойные пакеты с клапаном дегазации по 250, 500 и 1000 грамм, чтобы сохранить максимум аромата и вкуса.
              <br />
              <b> Отправка.</b> Доставляем заказ к вам на следующий день или срочной отправкой.
            </div>
          </div>
        </div>
        <div className={scss.box}>
          <div>
            ПОДРОБНЕЕ О НАС
          </div>
        </div>
      </div>






    </div >
  )
}

export default Grid2