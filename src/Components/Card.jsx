export default function Card(props){
    return(
        <div className="card-container">
            <div className="card">
                <div className="card__img"><img src={props.img} alt="" /></div>
                <div className="card__describtion">
                    <div className="card__describtion__country">
                        <h2>{props.country}</h2> <a className="card__describtion__country__map" href={props.googleMapsSrc}>View on Google Maps</a></div>
                    <div className="card__describtion__place">{props.place}</div>
                    <div className="card__describtion__date">{props.date}</div>
                    <div className="card__describtion__about">{props.about}</div>
                </div>
            </div>
        </div>
    )
}