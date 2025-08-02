 
import { HiOutlineLocationMarker } from 'react-icons/hi'

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.title} className="card--image" />
            <div className="card--info">
                <div className="card--location">
                    <HiOutlineLocationMarker color="#f55a5a" />
                    <span className="card--country">{props.location}</span>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--desc">{props.description}</p>
            </div>
        </div>
    )
}
