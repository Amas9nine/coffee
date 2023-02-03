import scss from "./Nav.module.scss"

function Nav() {
  return (
    <>
      <section className={scss.section}>
        <div className={scss.coffee}></div>

        <div className="container">

          <div className={scss.box}>

            <div className={scss.left_img}>

              <div>
                <p>
                  <hr />
                  Зерновой кофе
                </p>

                <p className={scss.second_P}>
                  свежей обжарки
                </p>
                <hr />
                <div className={scss.almat}>
                  с доставкой по Алматы
                  и всему Казахстану
                </div>
                <div>
                  <input className={scss.inp} type="button" value="Подробно" style={{ padding: "10px" }} />
                </div>
              </div>

            </div>

            <div className={scss.right_img}>
              <div className={scss.coffee}>
                <div className={scss.cup}> </div>
              </div>
            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default Nav