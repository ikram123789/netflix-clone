import './more.css'
import Morecard from './morecard'

function More() {
    return (
        <>
            <div className="container-more">
                <div className="banner-more">
                    <div className="heading">
                        <h1>More Reasons to Join</h1>
                    </div>
                    <div className="more-cards-container">
                        <Morecard 
                            heading="Enjoy on your TV" 
                            para="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."/>
                        <Morecard 
                            heading="Download your shows to watch offline" 
                            para="Save your favorites easily and always have something to watch."/>
                        <Morecard 
                            heading="Watch everywhere" 
                            para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."/>
                        <Morecard 
                            heading="Create profiles for kids" 
                            para="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default More