import { NewsCards } from '../../data'
import { NewsCard } from '../NewsCard/NewsCard'
import './News.scss'

export const News = () => {

    return (
        <div className="News">
            <span className='News__title'>Новости и анонсы</span>
            <div className='News__row'>
                {NewsCards.map(card => <NewsCard key={card.id} {...card}/>)}
            </div>
        </div>
    )
}