import faceBook from "./img/faceBookHeader.png"
import instagram from "./img/instagramHeader.png"
import twitter from "./img/twitterHeader.png"
import zernLeft from "./img/left.png"
import zernRight from "./img/right.png"
import logo from "./img/logo.png"
import cup from "./img/cup.png"
import heart from "./img/heart.png"


import scss from "./Header.module.scss"


function Header() {
  return (
    <>
      <section className={scss.cont}>
        
        <img src={zernLeft} />

        <div className='container'>

          <div className={scss.up}>
            <div className={scss.leftUp}>
              {/* left side palce for display flex */}
            </div>
            <div className={scss.rightUp}>
              <div className={scss.imgUp}>
                <a href="">
                  <img src={faceBook} />
                </a>
                <a href="">
                  <img src={instagram} />
                </a>
                <a href="">
                  <img src={twitter} />
                </a>
              </div>
              <div className={scss.letters}>
                <div className={scss.ru}>RU</div>
                <div>EN</div>
              </div>
            </div>
          </div>

          <div className={scss.downUp}>
            <div className={scss.img}>
              <img src={logo} />
            </div>
            <div className={scss.aBlock}>
              <a href="">Главная</a>
              <a href="">магазин</a>
              <a href="">сервис и аренда</a>
              <a href="">школа бариста</a>
              <a href="">О нас</a>
              <a href="">Контакты</a>
              <a className={scss.number} href="">+7 926 171 67 66</a>
            </div>
            <div className={scss.hearts}>
              <img src={heart} />
              <img src={cup} />
            </div>
          </div>
        </div>

        <img src={zernRight} />
      </section>
    </>
  )
}

export default Header