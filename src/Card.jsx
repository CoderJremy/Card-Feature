const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imgUrl}/>
            <div className="text">
                <div className="title">
                    <p style={props.styling} class="categories-title">{props.category}</p>
                    <h2>{props.heading}</h2>
                </div>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}

export default Card