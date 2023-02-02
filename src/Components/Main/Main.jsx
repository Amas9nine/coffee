import main from "./img/main.png"
import scss from "./Main.module.scss"

function Main() {
  return (
    <>
      <div >
        <img src={main} className={scss.main} />
      </div>
    </>
  )
}

export default Main