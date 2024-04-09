import './TrainingCard.scss'

interface TrainingCard {
    title: string;
    subtitle: string;
}

export const TrainingCard = (props:TrainingCard) => {

    return (
        <div className="TrainingCard">
            <span className="TrainingCard__title">{props.title}</span>
            <span className="TrainingCard__subtitle">{props.subtitle}</span>
            <button className="TrainingCard__button">Подробнее</button>
        </div>
    )
}