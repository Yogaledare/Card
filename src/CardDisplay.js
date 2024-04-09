const CardDisplay = ({imageUrl, loading, error}) => {
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!imageUrl) return <p></p>
    
    return (
        <div>
            <img src={imageUrl} alt="Drawn card"/>
        </div>
    )
}

export default CardDisplay; 