import scss from "./Footer.module.scss"
import logo from "./img/logo.png"
import am from "./img/AmericanExpress.png"
import vs from "./img/Visa.png"
import mir from "./img/mir.png"

function Footer() {
  return (
    <>

        <footer>

          <div className={scss.footernav}>
            <div>
              <img src={logo} />
            </div>
            <h3>ГЛАВНАЯ</h3>
            <h3>КОФЕ</h3>
            <h3>ЧАЙ</h3>
            <h3>ОБОРОДУВАНИЕ</h3>
            <h3> О НАС</h3>
            <h3>КОНТАКТЫ</h3>
          </div>

          <div className={scss.downfooter} >
            <p> info@coffelogia.kz</p>
            <p>
              <a href="tel:+77054186888
                ">+7 705 418 6888
              </a></p>
            <p>дом 8/5, микрорайон Мамыр-1 7, д, Алматы, Казахстан
            </p>

            <div className={scss.socia}>  <div className={scss.social}></div>
              <div className={scss.social}></div>
              <div className={scss.social}></div></div>

          </div>
          <div className="privacy">
            <p>©2022, All right reserved.</p>
            <div className={scss.footer}>
              <div>
                <img src={am} />
                <img src={vs} />
                <img src={mir} />
              </div>
            </div>
          </div>

        </footer>
    </>
  )
}

export default Footer