import scss from "./form.module.scss"
import o from "./img/0.png"

function FormBanner() {
  return (
    <div>
      <div className={scss.baner}>
        <img
          src={o}
          alt=""
          className={scss.pngcoffe}
        />

        <div className={scss.text}>
          <div>
            <h4 className={scss.h4banner}>Оставьте контакты</h4>
            <h1 className={scss.h1banner}>и получите консультацию</h1>
          </div>
        </div>

        <div className={scss.buttons}>
          <input type="text" name="" id="" placeholder="Ваше имя" />
          <input type="text" placeholder="Ваше номер телефона" />
          <button><h3>Отправить</h3></button>
        </div>
      </div>
    </div>

  )
}

export default FormBanner