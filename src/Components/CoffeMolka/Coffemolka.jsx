import scss from "./coffemolka.module.scss";



function Coffemolka() {
  return (
    <>
      <div >
        <div className={scss.bg}>
          <p>делимся секретом отличного кофе
          </p>
          <div className={scss.flex_direction}>
            <div>
              Не всегда вкус кофе может вас удовлетворить, даже, если он свежей обжарки, есть параметры, которыми вы можете самостоятельно управлять и корректировать насыщенность напитка.
            </div>
            <div>
              - Если кофе крепкий, терпкий, горький – вы можете увеличить помол, уменьшить количество заваренного кофе, уменьшить температуру воды и время заваривания.
            </div>
            <div>
              - Если кофе слабый, ненасыщенный, без тела, кисловатый – вам необходимо уменьшить помол, увеличить количество заваренного кофе, увеличить температуру воды и время заваривания
            </div>
          </div>
        </div>
      </div>

      
        <div className={scss.coffeForCoffe}>
          <p>
            Кофе для кофейни, бара или ресторана —
            обжарка по вашим параметрам
          </p>
        </div>
    
    </>
  )
}

export default Coffemolka