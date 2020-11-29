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
                                        <span>Foil Mid Price  </span>
                                        : ${foil_mid_price}
                                    </li>
                                </ul>
                            </>
                            :
                            <>
                                <ul>
                                    <li>
                                        <span>Normal Price </span>
                                        : ${normal_mid_price}
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span>Foil Price </span>
                                        : ${foil_mid_price}
                                    </li>
                                </ul>
                            </>
                            }
                        </div>
                        <div className="type-details">
                            <p className="foil">
                                <span> Foil </span>
                                {
                                    card.foil?
                                    ": Yes"
                                    :
                                    ": No"
                                }
                            </p>
                            <p><span> Type  </span> :{card.sub_type}</p>
                            <p><span> Amount </span> : {card.amount}</p>
                        </div>
                        <div className="card-text">
                            <p><span> Text </span>:{card.text}</p>
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