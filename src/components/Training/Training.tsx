import './Training.scss'
import { TrainingCards } from '../../data'
import { TrainingCard } from '../TrainingCard/TrainingCard'

export const Training = () => {

    return (
        <div className='Training'>
            <span className='Training__title'>Обучение</span>
            <div className='Training__wrapper'>
                <div className='Training__row'>
                    {TrainingCards.map(card => <TrainingCard key={card.id} {...card}/>)}
                </div>
            </div>
        </div>
    )
}