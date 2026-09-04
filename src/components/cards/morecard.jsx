import './morecard.css'

function Morecard(props) {
    return (
        <div className="more-card">
            <div className="more-heading">
                <p>{props.heading}</p>
            </div>
            <div className="more-desp">
                <p>{props.para}</p>
            </div>
        </div>
    )
}

export default Morecard