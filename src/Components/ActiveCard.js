export default function ActiveCard({card}) {
    return (
        <>
            {
                card.id ?
                <img src={card.img_url} alt={card.name} style={{width: "300px", height: "400px"}}/>
                :
                null
            }
        </>
    )
}