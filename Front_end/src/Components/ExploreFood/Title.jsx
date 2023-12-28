import style from './Title.module.css'

function Title() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container" id={style.container}>
          <h1 className="display-4">
            <img
              src="logo.png"
              alt="logo"
              className=""
              height="80px"
            /> <span id={style.food}>Foodie</span><span id={style.corner}>Corner</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Title
