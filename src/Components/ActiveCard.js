export default function ActiveCard({card}) {
    const { name, img_url, normal_low_price, normal_mid_price, normal_high_price, normal_market_price, foil_low_price, foil_mid_price, foil_high_price, foil_market_price, group_name, rarity } = card
    return (
        <div className="card">
            {
                card.id ?
                <>
                <div className="img-div">
                    <img src={img_url} alt={name}/>
                </div>
                <div className="card-div">
                    <h3 className="card-name">{name}</h3>
                    <div className="card-details">
                        <div className="card-price">
                            {
                            card.foil ===  true ?
                            <>
                                <ul>
                                <li>
                                    <span>Foil Low Price :</span>
                                    ${foil_low_price}
                                </li>
                                <li>
                                    <span>Foil Mid Price : </span>
                                    ${foil_mid_price}
                                </li>
                                <li>
                                    <span>Foil High Price :</span>
                                    ${foil_high_price}
                                </li>
                                <li>
                                    <span>Foil Market Price : </span>
                                    ${foil_market_price}
                                </li>
                                </ul>
                            </>
                            :
                            <>
                                <ul>
                                <li>
                                    <span>Low Price :</span>
                                    ${normal_low_price}
                                </li>
                                <li>
                                    <span>Mid Price :</span>
                                    ${normal_mid_price}
                                </li>
                                <li>
                                    <span>High Price :</span>
                                    ${normal_high_price}
                                </li>
                                <li>
                                    <span>Market Price : </span>
                                    ${normal_market_price}
                                </li>
                                </ul>
                                <ul>
                                <li>
                                    <span>Foil Low Price : </span>
                                    ${foil_low_price}
                                </li>
                                <li>
                                    <span>Foil Mid Price : </span>
                                    ${foil_mid_price}
                                </li>
                                <li>
                                    <span>Foil High Price :</span>
                                    ${foil_high_price}
                                </li>
                                <li>
                                    <span>Foil Market Price : </span>
                                    ${foil_market_price}
                                </li>
                                </ul>
                            </>
                            }
                        </div>
                        <div className="type-details">
                            <p className="foil">
                                <span> Foil : </span>
                                {
                                    card.foil?
                                    "Yes"
                                    :
                                    "No"
                                }
                            </p>
                            <p><span> Type : </span>{card.sub_type}</p>
                            <p> Amount :{card.amount}</p>
                        </div>
                        <div className="card-text">
                            <p><span> Text :</span>{card.text}</p>
                        </div>
                    </div>
                </div>
                </>
                :
                null
            }
        </div>
    )
}