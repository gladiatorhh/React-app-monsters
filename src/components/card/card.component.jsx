import "./card.style.css";




const Card = ({ monster, imgAlt, className }) => {
    const { name, email, id } = monster;
    return (
        <div className={`card-container ${className}`} key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=200x200`} alt={imgAlt} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );

}

export default Card;