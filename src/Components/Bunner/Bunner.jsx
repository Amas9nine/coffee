import React from 'react'
import scss from "./Bunner.module.scss"

function Bunner() {
  return (
    < div >
      <div className={scss.baner}>
        <div className={scss.text}>
          <div>
            <h4>Оставьте контакты</h4>
            <h1>и получите консультацию</h1>
          </div>
        </div>


        <div className={scss.buttons}>
          <div className={scss.block}>
            <input type="text" name="" id="" placeholder="Ваше имя" />   <br />
            <input type="text" placeholder="Ваше номер телефона" />   <br />
            <button> <h3>Отправить</h3></button>
            <br />
          </div>
        </div>
      </div>
      <br />

      <br />
    </div>

  )
}

export default Bunner