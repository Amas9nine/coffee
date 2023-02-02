import scss from "./Nature.module.scss"

function Nature() {
  return (
    <>
      <div className="container">
        <div className={scss.Nature}>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={scss.one}>Подпишись на наши</div>
            <br />
            <div className={scss.two}>новые поступления</div>
            <br />
            <div className={scss.btn}>
              <button className={scss.btn1}>Подписаться</button>
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default Nature