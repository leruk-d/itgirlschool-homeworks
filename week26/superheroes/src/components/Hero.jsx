import './Hero.css';

function Hero(props) {
    return (
        <div className="hero">
            <h2 className="hero-name">{props.name}</h2>
            <div className="hero-universe">Вселенная: {props.universe}</div>
            <div className="hero-alterEgo">Альтер эго: {props.alterEgo}</div>
            <div className="hero-activity">Род деятельности: {props.activity} </div>
            <div className="hero-friends">Друзья: {props.friends} </div>
            <div className="hero-powers">Суперсилы: {props.superPowers}</div>
            <img src={props.imgLink} alt={props.picture} />
            <div className="hero-details">Подробнее: {props.moreDetails}</div>
        </div>
    );
}

export default Hero;