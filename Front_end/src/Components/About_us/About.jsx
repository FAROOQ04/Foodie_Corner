import style from './about.module.css'

function About() {
  return (
    <div>
      <div className="container" id={style.container}>
        <div className={style.paraParent}>
          <div className={style.para}>Welcome to our online FoodieCorner website! Our website is dedicated to providing you with a convenient and hassle-free way to order food from a variety of restaurants and cuisines.</div>
          <div className={style.para}>
            Our mission is to make it easy for you to browse through the menus of various restaurants and order your favorite food with just a few clicks. Whether you re craving Italian, Chinese, Indian, or American cuisine, we ve got you covered. We work with the best restaurants in the area to ensure that you get high-quality, delicious food every time you order.
          </div>
          <div className={style.para}>Our website is user-friendly and easy to navigate, making it easy for you to find what you re looking for. We also offer secure online payment options, so you can order food with peace of mind.</div>
        </div>
        <div className={style.logoCard}>
          <div className="card" >
            <img src="logo.png" className="card-img-top" alt="logo"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default About
