import scss from "./White.module.scss"

function White() {
  return (
    <>
      <div className="container">
        <div className={scss.white}>
          <h1>Бестселлеры: эти сорта заказывают чаще всего</h1>
        </div>
      </div>
    </>
  )
}

export default White