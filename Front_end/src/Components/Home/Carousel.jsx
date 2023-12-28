import style from './Carousel.module.css'
function Carousel() {

    return (
        <>
            <div className='jumbotron jumbotron-fluid' id={style.container}>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner ">
                        <div className="carousel-item active" id={style.CarouselImgDiv}>
                            <img src="1.jpg" className="d-block w-100" alt="img 1" />
                        </div>
                        <div className="carousel-item" id={style.CarouselImgDiv}>
                            <img src="slide2.png" className="d-block w-100" alt="img 2" />
                        </div>
                        <div className="carousel-item" id={style.CarouselImgDiv}>
                            <img src="lanch.jpg" className="d-block w-100" alt="img 3" />
                        </div>
                        <div className="carousel-item" id={style.CarouselImgDiv}>
                            <img src="vanila.jpeg" className="d-block w-100" alt="img 4" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )

}

export default Carousel
