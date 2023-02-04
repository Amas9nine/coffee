import Card from "./Card"
import scss from "./Cards.module.scss"

function Cards() {
  return (
    <>
    
      <div className="container">
        <div className={scss.w}>
          <div className={scss.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className={scss.lineBlock}>
            <button className={scss.line}>
              все товары
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards