import './card.css'

function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.link} alt="" />
        </div>
    )
}

export default Card
