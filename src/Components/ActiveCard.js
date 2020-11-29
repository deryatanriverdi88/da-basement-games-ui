import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'

export default function ActiveCard({card}) {
    const { name, normal_mid_price, foil_mid_price, rarity, sub_type, amount, text, img_url } = card
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
                                <p><span>Foil</span> : Yes</p>
                                <p>
                                    <span>Foil Mid Price  </span>
                                        : ${foil_mid_price}
                                </p>
                            </>
                            :
                            <>
                                <p><span>Foil</span> : No</p>
                                <p>
                                    <span>TCG Mid</span>
                                      : ${normal_mid_price}
                                </p>
                            </>
                            }
                        </div>
                        <div className="type-details">
                            <p><span> Type  </span> :{card.sub_type}</p>
                            <p><span> Rarity </span> : {card.rarity}</p>
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