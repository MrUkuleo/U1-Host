function Card(props)
{
    const iconName = props.icon;
    return(
    <>
        <div className="card">
            <h1>{props.header}</h1>
            <div className="icon"><props.icon size={40} color="#1877f2" /></div>  
            <p>{props.text}</p>
          </div>
    </>
    )
}

export default Card;