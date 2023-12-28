import style from './ExploreFoodCards3.module.css'

function ExploreFOOdCards3() {
    return (
        <>
            <div className='container' id={style.containerFluid}>
                <div className="row m-0">
                    <div className="card" id={style.Cards1}>
                        <img src="dum nv biryani.jpeg" className="card-img-top " alt="food" />
                    
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" id={style.Cards1}>
                        <img src="fry nv biryani.jpg" className="card-img-top" alt="food" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" id={style.Cards1}>
                        <img src="leg nv biryani.jpeg" className="card-img-top" alt="food" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" id={style.Cards1}>
                        <img src="mutton nv biryani.jpeg" className="card-img-top" alt="food" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default ExploreFOOdCards3
