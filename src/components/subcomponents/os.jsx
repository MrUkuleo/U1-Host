function OS(props)
{
    return(
    <>
        <div className="os">
        <div className="icon-os"><props.icon size={60} color="#1877f2"/></div>
            <div className="os-descryption">
                <h2>{props.OSName}</h2>
                <p>{props.version}</p>
            </div>
        </div>    
    </>
    )
}

export default OS;