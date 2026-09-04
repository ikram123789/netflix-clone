import './hero.css'

function Hero() {

    return (
        <div className="hero-section">
            <div className="hero-img">
                <div className="img-shadow"></div>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a00fdfd7-4916-4f12-b5ff-c05b9d7b4d07/web/PK-en-20260824-TRIFECTA-perspective_cef32456-ff7e-4bc4-9c3c-9287eaebf6cf_large.jpg'></img>
            </div>
            <div className="fake-nav"></div>
            <div className="main">
                <div className="container-hero">
                    <div className="main-headline">
                        <h1>Unlimited movies, TV <br />shows, and more</h1>
                    </div>
                    <div className="descp">
                        <h4>Starts at Rs 250. Cancel anytime.</h4>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <div className="buttons">
                        <input type="text" placeholder='Email address'/>
                        <button>Get Started &gt;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero