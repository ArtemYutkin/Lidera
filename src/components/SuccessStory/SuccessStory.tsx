import womanInHat from '../../assets/womanInHat.svg'
import fewHat from '../../assets/fewHat.svg'
import chessHat from '../../assets/chessHat.svg'
import owner from '../../assets/owner.svg'
import redHat from '../../assets/redHat.svg'
import food from '../../assets/food.svg'
import './SuccessStory.scss'

export const SuccessStory = () => {

    return (
        <div className="Success">
            <div className="Success__info">
                <span className="Success__info-title">Истории успеха</span>
                <span className="Success__info-name">Алимбекова Бакыт - Салон эксклюзивных шляп "Elegant"</span>
                <span className="Success__info-story">
                    Салон эксклюзивных шляп Elegant работает на казахстанском рынке с 1999 года. Бизнес основала Алимбекова Бакыт Калиевна и ее коллеги по цеху. Компания выпускает шляпы, головные уборы для силовых структур, и с недавних времен дизайнерскую верхнюю одежду.
                </span> 
                <span className="Success__info-story">   
                    Мы побывали в гостях в салоне Elegant и узнали о том, как происходит создание и сборка индивидуальных шляп, с какими трудностями столкнулась компания в 2020 году и что она планирует на ближайшее будущее.
                </span>
                <button className="Success__info-button">Читать интервью</button>
            </div>
            <div className="Success__icons">
                <div className="Success__icons-column">
                    <img className='Success__icons-column__woman' src={womanInHat} alt="" />
                    <img className='Success__icons-column__fewHat' src={fewHat} alt="" />
                </div>
                <div className="Success__icons-column">
                    <img className='Success__icons-column__chessHat' src={chessHat} alt="" />
                    <img className='Success__icons-column__owner' src={owner} alt="" />
                    <img className='Success__icons-column__redHat'src={redHat} alt="" />
                </div>
                <div className="Success__icons-column">
                    <img className='Success__icons-column__food' src={food} alt="" />
                </div>
            </div>
        </div>
    )
}