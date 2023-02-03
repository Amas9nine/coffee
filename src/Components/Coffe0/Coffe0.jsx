import scss from "./Coffe0.module.scss"
import img from "./img/1.png"

function Coffe0() {
  return (
    <>
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
    </>)
}

export default Coffe0