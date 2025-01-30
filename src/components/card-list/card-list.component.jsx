import { Component } from "react";
import Card from "../card/card.component"

import "./card-list.style.css";

class CardList extends Component {
    constructor() {
        super();
    }


    render() {
        const { monsters, className} = this.props
        return (
            <div className={`card-list ${className}`}>
                {
                    monsters.map(monster => (
                        <Card monster={monster} imgAlt={monster.name} />
                    ))
                }
            </div>
        );
    }
}

export default CardList;