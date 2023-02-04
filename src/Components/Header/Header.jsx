import faceBook from "./img/faceBookHeader.png"
import instagram from "./img/instagramHeader.png"
import twitter from "./img/twitterHeader.png"
import zernLeft from "./img/left.png"
import zernRight from "./img/right.png"
import logo from "./img/logo.png"
import cup from "./img/cup.png"
import heart from "./img/heart.png"

import scss from "./Header.module.scss"
import { Link } from "react-router-dom"


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
                <Link to="">
                  <img src={faceBook} />
                </Link>
                <Link to="">
                  <img src={instagram} />
                </Link>
                <Link to="">
                  <img src={twitter} />
                </Link>
              </div>
              <div className={scss.letters}>
                <div className={scss.ru}>RU</div>
                <div>EN</div>
              </div>
            </div>
          </div>

          <div className={scss.downUp}>
            <div className={scss.img}>
              <Link to='/'>
                <img src={logo} />
              </Link>
            </div>
            <div className={scss.aBlock}>
              <Link to="/">Главная</Link>
              <Link to="/cards">магазин</Link>
              <Link to="/service">сервис и аренда</Link>
              <Link to="./coffe0">школа бариста</Link>
              <Link to="/about">О нас</Link>
              <Link to="">Контакты</Link>
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