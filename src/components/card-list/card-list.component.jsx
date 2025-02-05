import Card from "../card/card.component"

import "./card-list.style.css";

const CardList = ({ monsters, className }) => (
    <div className={`card-list ${className}`}>
        {
            monsters.map(monster => (
                <Card monster={monster} imgAlt={monster.name} />
            ))
        }
    </div>
)

export default CardList;