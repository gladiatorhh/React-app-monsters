import { Component } from "react";

import "./card.style.css";

class Card extends Component {

    render() {
        const { name, email, id } = this.props.monster;
        const { imgAlt, className } = this.props;
        return (
            <div className={`card-container ${className}`} key={id}>
                <img src={`https://robohash.org/${id}?set=set2&size=200x200`} alt={imgAlt} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}

export default Card;