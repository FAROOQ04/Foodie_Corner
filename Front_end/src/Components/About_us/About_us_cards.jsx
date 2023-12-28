import style from './About_us_cards.module.css'

function About_us_cards() {
    return (
        <div>
            <div className='container' id={style.container}>
            <div className="card" id={style.card}>
                <img src="farooq.jpg" className="card-img-top" alt="img"/>
                    <div className="card-body">
                        <h1>SHAIK FAROOQ</h1>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default About_us_cards
