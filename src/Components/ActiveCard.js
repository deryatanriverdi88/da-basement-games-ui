export default function ActiveCard({card}) {
    const { name, img_url, normal_low_price, normal_mid_price, normal_high_price, normal_market_price, foil_low_price, foil_mid_price, foil_high_price, foil_market_price, group_name, rarity } = card
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