import style from './HomeCards2.module.css'

function HomeCards2() {
    return (
        <>
            <div className='containerFluid' id={style.containerFluid}>
                <div className="row m-0">
                    <div className="card" id={style.Cards1}>
                        <img src="v biryani.jpeg" className="card-img-top " alt="food" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card </p>
                            <a href="#" className="btn btn-primary" >Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" id={style.Cards1}>
                        <img src="panner veg biryani.jpeg" className="card-img-top" alt="food" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" id={style.Cards1}>
                        <img src="parmeshwar veg biryani.jpeg" className="card-img-top" alt="food" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" id={style.Cards1}>
                        <img src="royal veg birayani cum pulao.jpeg" className="card-img-top" alt="food" />
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

export default HomeCards2
